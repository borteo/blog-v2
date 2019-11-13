import React, { Fragment } from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { css, Styled } from "theme-ui"
// import { css, useColorMode, Styled } from "theme-ui"

const rootPath = `${__PATH_PREFIX__}/`

const Divider = () => (
  <div css={{
    width: '33%',
    height: '7px',
    background: '#333',
    margin: '1.5em auto 1.75em auto',
    transition: `width 0.25s linear`,
    '&:hover': {
      width: '50%',
    }
  }}/>
)

const Oblique = () => (
  <div css={css({
    width: `100%`,
    height: `60px`,
    backgroundColor: `backgroundSecondary`,
    position: `absolute`,
    left: `0`,
    right: `0`,
    marginTop: `-18px`,
    transform: `skew(4deg, 2deg)`,
  })}/>
)


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
          fontSize: [70, 102, 150],
          textTransform: `uppercase`,
          letterSpacing: `0.05em`,
          textAlign: `center`,
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
          fontSize: [25, 30, 43],
          textAlign: `center`
        })}
      >
        {description}
      </Styled.h2>
      <Oblique />
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
          m: `2em auto`,
          px: [1, 3],
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
