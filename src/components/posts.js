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
                '125px 80%',
                '125px 100%',
              ],
              gridTemplateRows: ['160px', '200px'],
            })}>
              <figure
                css={css({
                  width: [`100%`, `125px`],
                  height: [`200px`, `125px`],
                  overflow: `hidden`,
                  margin: `0`,
                })}
              > 
              <Styled.div 
                css={css({
                  width: `100%`,
                  height: `100%`,
                  background: `url("${node.cover}") top left no-repeat`,
                  backgroundPosition: `center`, 
                  backgroundSize: `cover`,
                  transition: `all 0.25s ease`,
                  margin: `0`,
                  '&:hover': {
                    transform: `scale(1.4) rotate(-5deg)`
                  }
                })}
              />
              </figure>
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
                <Styled.p css={css({color: 'secondary', fontSize: [17, 19, 20]})}>{node.subtitle}</Styled.p>
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
