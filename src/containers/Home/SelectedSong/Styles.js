import { Colors, Fonts, Metrics } from '../../../config/Constants'

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    height: Metrics.base * 12,
    width: Metrics.width * 0.75,
    borderColor: Colors.white,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Metrics.base
  },
  selectText: {
    ...Fonts.primaryCaptionBold,
    color: Colors.primary
  },
  playlistNameText: {
    ...Fonts.primaryBodyBold,
    color: Colors.white
  },
  trackText: {
    ...Fonts.primaryDetailBold,
    color: Colors.white
  },
  selectedTypeText: {
    marginTop: Metrics.base,
    ...Fonts.primaryDetail,
    color: Colors.grey2
  },
  trackImageContainer: {
    paddingRight: Metrics.base,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: { height: Metrics.base * 10, width: Metrics.base * 10 },
  rowContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  trackTextContainer: { flex: 1, justifyContent: 'space-around' }
})
