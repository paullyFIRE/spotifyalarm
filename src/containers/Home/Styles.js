import { Colors, Fonts, Helpers, Metrics } from '../../config/Constants'

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    paddingBottom: Metrics.base * 8
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  secondaryContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    flex: 3,
    paddingBottom: Metrics.height * (Helpers.isIphoneX ? 0.2 : 0.05)
  },
  welcomeText: {
    ...Fonts.primarySubheadingBold,
    color: Colors.white
  },
  welcomeTextHightlight: {
    color: Colors.primary
  },
  idText: {
    ...Fonts.primaryCaption,
    color: Colors.white,
    marginTop: Metrics.base * 2
  }
})
