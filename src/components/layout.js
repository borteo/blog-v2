import React from "react"
import { css, Styled } from "theme-ui"
import { Global } from '@emotion/core'

import Header from "./header"

export default ({ children, ...props }) => (
  <Styled.root>
    <Global
      styles={theme => ({
        body: {
          margin: 0,
          padding: 0
        },
        ".gatsby-resp-image-background-image": {
          position: `absolute !important`,
        }
      })}
    />
      <Header {...props} />
      <div
        css={css({
          maxWidth: `container`,
          margin: `0 auto`,
          px: [1, 3],
          py: [3, 4],
        })}
      >
        {children}
      </div>
  </Styled.root>
)
  