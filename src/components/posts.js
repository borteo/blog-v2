import React, { Fragment } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Styled, css } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/home-footer"

const Posts = ({ location, posts, siteTitle, siteDescription, socialLinks }) => (
  <Layout location={location} title={siteTitle} description={siteDescription}>
    <main>
      {posts.map(({ node }) => {
        const title = node.title || node.slug
        const keywords = node.keywords || []

        console.log('node', node)

        return (
          <Fragment key={node.slug}>
            <SEO title="Home" keywords={keywords} />

          <AniLink
            fade
            duration={0.5} 
            to={node.slug}
            css={css({textDecoration: `none`})}
          >
            <Styled.div css={css({
              display: 'grid',
              gridGap: 2,
              // use arrays for mobile-first responsive styles
              gridTemplateColumns: [
                'auto',
                '150px 0.75fr',
                '150px 1fr',
              ],
              mb: 30,
              mt: 10,
              border: `10px solid transparent`,
              transition: `all .42s cubic-bezier(.165,.84,.44,1)`,
              '&:hover': {
                boxShadow: `0 10px 50px 0px rgba(0,0,0, .15)`,
              }
            })}>
              <figure
                css={css({
                  width: [`100%`, `150px`],
                  height: [`200px`, `150px`],
                  overflow: `hidden`,
                  margin: `0`,
                  background: `url("${node.cover}") top left no-repeat`,
                  backgroundPosition: `center`, 
                  backgroundSize: `cover`,
                })}
              />
              <article css={css({
                  mt: 1,
                  position: `relative`,
              })}>
                <Styled.h2
                  css={css({
                    mb: 1,
                    fontSize: [25, 30, 35]
                  })}
                >
                  <Styled.a
                    as={AniLink}
                    fade
                    duration={0.5} 
                    to={node.slug}
                  >
                    {title}
                  </Styled.a>
                </Styled.h2>
                <Styled.h3 css={css({mt: 2, color: 'secondary', fontSize: [17, 19, 21], fontWeight: `300`})}>
                  {node.subtitle}
                </Styled.h3>
              </article>
            </Styled.div>
            </AniLink>
          </Fragment>
        )
      })}
    </main>
    <Footer socialLinks={socialLinks} />
  </Layout>
)

export default Posts
