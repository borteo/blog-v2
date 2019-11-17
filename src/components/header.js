import React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { css, Styled } from "theme-ui"
// import { css, useColorMode, Styled } from "theme-ui"
import curve from "../../assets/curve.svg"

const rootPath = `${__PATH_PREFIX__}/`

const Mask = () => (
  <img css={{
    width: '100%',
    position: `absolute`,
    bottom: `-0.5em`,
    zIndex: `-1`,
  }}
  src={curve} />
)


const Title = ({ title, description, location }) => {
  if (location.pathname !== rootPath) {
    return (
      <Styled.a
        as={AniLink}
        fade
        duration={0.5}
        css={{
          position: `absolute`,
          top: `1em`,
          backgroundColor: `transparent`,
          boxShadow: `none`,
          '&:hover': {
            backgroundColor: `transparent`,
            boxShadow: `none`
          }
        }}
        to={`/`}
      >
        <Styled.h3 description="Torna all'indice">
          {title}
        </Styled.h3>
      </Styled.a>
    )
  }
  return (
    <>
      <Styled.h1
        css={css({
          my: 0,
          fontSize: [90, 102, 150],
          textTransform: `uppercase`,
          letterSpacing: `0.05em`,
          textAlign: `center`,
          transition: `all 0.25s linear`,
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
      <Styled.h2
        css={css({
          color: 'heading',
          fontSize: [25, 30, 43],
          textAlign: `center`,
          mt: [2, 3],
          mx: [3, 1],
          mb: 4,
        })}
      >
        {description}
      </Styled.h2>
    </>
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
      position: `relative`,
    })}>
      <div
        css={css({
          maxWidth: `container`,
          m: `2em auto`,
          px: [1, 3],
          pt: 3,
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
      <Mask />
    </header>
  )
}
