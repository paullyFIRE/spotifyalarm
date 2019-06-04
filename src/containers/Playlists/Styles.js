import { Colors, Fonts, Metrics } from '../../config/Constants'

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    paddingBottom: Metrics.base * 3
  },
  playlistContainer: {
    width: '100%',
    paddingHorizontal: Metrics.base * 2,
    padding: Metrics.base,
    flexDirection: 'row'
  },
  playlistImageContainer: {
    padding: Metrics.base,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: { width: 72, height: 72 },
  playlistInfoContainer: { justifyContent: 'center', flex: 1 },
  playlistNameText: {
    ...Fonts.primaryCaptionBold,
    color: Colors.white
  },
  playlistCreatorText: {
    ...Fonts.primaryDetail,
    color: Colors.grey2,
    marginTop: Metrics.base
  },
  totalTracksText: {
    ...Fonts.primaryDetail,
    color: Colors.grey2
  },
  textBold: {
    ...Fonts.primaryDetailBold
  },
  textPrimary: {
    color: Colors.primary
  }
})
