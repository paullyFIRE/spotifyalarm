import { moderateScale } from 'react-native-size-matters'

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
const formatFontKey = (fontKey, fontSizeKey, suffix) =>
  `${fontKey}${capitalize(fontSizeKey)}${capitalize(suffix)}`

export const generateExpoFontsConfig = baseFonts =>
  baseFonts.reduce(
    (fontList, { fontFamily, suffix = '', font }) => ({
      ...fontList,
      [fontFamily + suffix]: font
    }),
    {}
  )

const generateFontsPerSize = ({ fontSize, fontSizeKey, baseFonts = {} }) => {
  if (!fontSize || !fontSizeKey) return null

  return Object.values(baseFonts).reduce((fontsPerSizeList, baseFont) => {
    const { fontFamily, suffix = '' } = baseFont

    return {
      ...fontsPerSizeList,
      [formatFontKey(fontFamily, fontSizeKey, suffix)]: {
        fontSize: moderateScale(fontSize),
        fontFamily: fontFamily + suffix
      }
    }
  }, {})
}

export const generateFonts = ({ fontSizes = {}, baseFonts = {} }) =>
  Object.entries(fontSizes).reduce(
    (fontsList, [fontSizeKey, fontSize]) => ({
      ...fontsList,
      ...generateFontsPerSize({
        baseFonts,
        fontSizeKey,
        fontSize
      })
    }),
    {}
  )
