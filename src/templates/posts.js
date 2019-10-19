import React from "react"

import Posts from "../components/posts"

export default ({
  pageContext: { posts, siteTitle, siteDescription, socialLinks },
  location,
}) => (



  <Posts
    location={location}
    posts={posts}
    siteTitle={siteTitle}
    siteDescription={siteDescription}
    socialLinks={socialLinks}
  />
)
