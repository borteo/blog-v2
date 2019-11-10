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
    <div css={css({
      width: `100%`,
      position: `fixed`,
      height: `20px`,
      backgroundColor: `backgroundSecondary`,
      zIndex: `-1`,
    })}/>
    <Header {...props} />
    <div>
      <div
        css={css({
          maxWidth: `container`,
          mx: `1em`,
          px: [1, 3],
          py: [3, 4],
        })}
      >
        {children}
      </div>
    </div>
  </Styled.root>
)
  