import merge from "deepmerge"
import typography from "./typography"
import colors from "./colors"
import styles from "./styles"
import prism from "./prism"

export default merge(typography, {
  initialColorMode: `light`,
  colors,
  sizes: {
    container: 672,
  },
  styles,
  prism,
})
