import FA5Solid from '../../node_modules/react-native-vector-icons/Fonts/FontAwesome5_Solid.ttf'
import Feather from '../../node_modules/react-native-vector-icons/Fonts/Feather.ttf'
import Octicons from '../../node_modules/react-native-vector-icons/Fonts/Octicons.ttf'
import anticon from '../../node_modules/react-native-vector-icons/Fonts/AntDesign.ttf'
import fontRegular from '../assets/fonts/Montserrat-Regular.ttf'
import fontRegularBold from '../assets/fonts/Montserrat-Bold.ttf'
import { generateExpoFontsConfig } from '../functions/fonts'
import { generateFonts } from '../functions/fonts'

const baseFonts = [
  {
    fontFamily: 'primary',
    font: fontRegular
  },
  {
    fontFamily: 'primary',
    font: fontRegularBold,
    suffix: 'Bold'
  }
]

const fontSizes = {
  jumbo: 68,
  heading: 32,
  subheading: 28,
  body: 24,
  caption: 20,
  detail: 16
}

const expoFontsConfig = {
  ...generateExpoFontsConfig(baseFonts),
  'FontAwesome5Free-Solid': FA5Solid,
  Feather,
  anticon,
  Octicons
}

export { fontSizes, baseFonts, expoFontsConfig }
export default generateFonts({ baseFonts, fontSizes })
