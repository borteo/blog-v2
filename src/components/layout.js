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
        }
      })}
    />
    <Header {...props} />
    <div>
      <div
        css={css({
          maxWidth: `container`,
          mx: `1em`,
          px: 3,
          py: 4,
        })}
      >
        {children}
      </div>
    </div>
  </Styled.root>
)
  