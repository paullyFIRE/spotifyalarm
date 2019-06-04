import { Colors, Fonts, Metrics } from '../../../config/Constants'

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  trackNameText: {
    ...Fonts.primaryCaptionBold,
    color: Colors.white
  },
  trackArtistText: {
    ...Fonts.primaryCaptionBold,
    color: Colors.white,
    marginTop: Metrics.base
  },
  trackImageContainer: {
    paddingRight: Metrics.base,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: { height: Metrics.base * 25, width: Metrics.base * 25 },
  trackTextContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: Metrics.base * 4
  }
})
