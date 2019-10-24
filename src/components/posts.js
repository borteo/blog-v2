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

        return (
          <Fragment key={node.slug}>
            <SEO title="Home" keywords={keywords} />
            <div>
              <Styled.h2
                css={css({
                  mb: 1,
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
              <Styled.p>{node.subtitle}</Styled.p>
            </div>
          </Fragment>
        )
      })}
    </main>
    <Footer socialLinks={socialLinks} />
  </Layout>
)

export default Posts
