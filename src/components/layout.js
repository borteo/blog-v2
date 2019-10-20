import React from "react"
import { css, Styled } from "theme-ui"
import Header from "./header"

export default ({ children, ...props }) => (
  <Styled.root css={css({m: -1})}>
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
