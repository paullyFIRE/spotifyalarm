import { Colors, Fonts, Helpers, Metrics } from '../../config/Constants'

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    paddingTop: Metrics.base * ((Helpers.isIphoneX ? 2 : 0) + 4)
  },
  contentContainer: {
    paddingBottom: Metrics.base * 3
  },
  trackItemContainer: {
    width: '100%',
    paddingHorizontal: Metrics.base * 2,
    flexDirection: 'row'
  },
  trackImageContainer: {
    padding: Metrics.base,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: { width: 65, height: 65 },
  trackInfoContainer: {
    paddingTop: Metrics.base / 2,
    flex: 1
  },
  trackInfoText: {
    ...Fonts.primaryDetail,
    color: Colors.white,
    flexWrap: 'wrap'
  },
  trackInfoTextBold: {
    ...Fonts.primaryDetailBold
  }
})
