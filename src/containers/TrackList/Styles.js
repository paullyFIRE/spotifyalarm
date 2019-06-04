import { Colors, Fonts, Metrics } from '../../config/Constants'

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    paddingTop: Metrics.base * 6
  },
  trackItemContainer: {
    width: '100%',
    paddingHorizontal: Metrics.base * 2,
    paddingTop: Metrics.base * 2,
    flexDirection: 'row'
  },
  trackImageContainer: {
    padding: Metrics.base,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: { width: 65, height: 65 },
  trackInfoContainer: { justifyContent: 'center', flex: 1 },
  trackInfoText: {
    ...Fonts.primaryDetail,
    color: Colors.white,
    textAlignVertical: 'center',
    flexWrap: 'wrap'
  }
})
