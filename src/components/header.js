import React, { Fragment } from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { css, Styled } from "theme-ui"
// import { css, useColorMode, Styled } from "theme-ui"

const rootPath = `${__PATH_PREFIX__}/`

const Divider = () => {
  return (
    <div style={{
      width: '170px',
      height: '7px',
      background: '#333',
      margin: '1.5em 0 1.75em 0'
    }}/>  
  )
}

const Title = ({ title, description, location }) => {
  if (location.pathname !== rootPath) {
    return (
      <Styled.a
        as={AniLink}
        fade
        duration={0.5} 
      css={{
        color: `inherit`,
        boxShadow: `none`,
        backgroundColor: `transparent`,
      }}
      to={`/`}
      >
        {title}
      </Styled.a>
    )
  }
  return (
    <Fragment>
      <Styled.h1
        css={css({
          my: 0,
          fontSize: [56, 102, 115],
          textTransform: `uppercase`,
          letterSpacing: `0.05em`,
        })}
      >
        <Styled.a
          as={Link}
          css={{
            color: `inherit`,
            boxShadow: `none`,
            backgroundColor: `transparent`,
          }}
          to={`/`}
        >
          {title}
        </Styled.a>
      </Styled.h1>
      <Divider />
      <Styled.h2
        css={css({
          color: 'heading',
          fontSize: [21, 35, 43]
        })}
      >
        {description}
      </Styled.h2>
    </Fragment>
  )

}

export default ({ children, title, description, ...props }) => {
  // const [colorMode, setColorMode] = useColorMode()
  // const isDark = colorMode === `dark`
  // const toggleColorMode = e => {
  //   setColorMode(isDark ? `light` : `dark`)
  // }

  return (
    <header css={css({
      backgroundColor: `backgroundSecondary`,
      py: 2,
      zIndex: `0`,
    })}>
      <div
        css={css({
          maxWidth: `container`,
          mx: `1em`,
          px: 3,
          pt: 4,
        })}
      >
        <div
          // css={css({
          //   display: `flex`,
          //   justifyContent: `space-between`,
          //   alignItems: `baseline`,
          //   mb: 4,
          // })}
        >
          <Title {...props} title={title} description={description} />
          {children}
          {/* <Switch
            aria-label="Toggle dark mode"
            css={css({
              bg: `black`,
            })}
            checkedIcon={checkedIcon}
            uncheckedIcon={uncheckedIcon}
            checked={isDark}
            onChange={toggleColorMode}
          /> */}
        </div>
        {/* {props.location.pathname === rootPath && <Bio />} */}
      </div>
    </header>
  )
}
