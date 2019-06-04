import { Colors, Fonts, Metrics } from '../../../config/Constants'

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    padding: Metrics.base * 2,
    width: '90%',
    alignItems: 'center'
  },
  startButton: {
    marginTop: Metrics.base * 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: Metrics.base * 8,
    borderRadius: Metrics.base * 4,
    backgroundColor: Colors.primary
  },
  startButtonText: {
    ...Fonts.primaryBodyBold,
    color: Colors.black
  },
  timerText: {
    ...Fonts.primaryJumboBold,
    color: Colors.white
  }
})
