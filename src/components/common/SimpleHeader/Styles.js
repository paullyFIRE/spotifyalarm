import { Colors, Fonts, Metrics } from '../../../config/Constants'

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    marginBottom: Metrics.base
  },
  buttonLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: Metrics.base * 2.5
  },
  buttonLeftText: {
    ...Fonts.primaryDetailBold,
    color: Colors.white,
    paddingLeft: Metrics.base
  }
})
