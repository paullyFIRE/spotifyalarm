import { Colors, Fonts, Metrics } from '../../../config/Constants'

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: Metrics.base * 2,
    paddingBottom: Metrics.base,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary
  },
  imageContainer: {
    padding: Metrics.base
  },
  image: {
    width: 120,
    height: 120
  },
  playlistInfoContainer: {
    flex: 1,
    justifyContent: 'space-between',
    padding: Metrics.base
  },
  playlistNameText: {
    ...Fonts.primaryBodyBold,
    color: Colors.white
  },
  trackNumbersText: {
    ...Fonts.primarydetailBold,
    color: Colors.white
  },
  selectPlaylistButton: {
    width: '90%',
    height: Metrics.base * 4,
    borderRadius: Metrics.base * 2,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginBottom: Metrics.base
  },
  selectPlaylistText: {
    ...Fonts.primaryDetail,
    color: Colors.black
  }
})
