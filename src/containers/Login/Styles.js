import { Colors, Fonts, Metrics } from '../../config/Constants'

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  instructionText: {
    ...Fonts.primaryBodyBold,
    color: Colors.white,
    textAlign: 'center',
    marginTop: Metrics.base * 4,
    marginBottom: Metrics.base * 6
  },
  loginButtonContainer: {
    marginBottom: Metrics.base * 8
  },
  upperContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  lowerContainer: {
    flex: 2,
    alignItems: 'center'
  },
  pulsingWave: {
    width: '100%',
    height: Metrics.base * 20
  }
})
