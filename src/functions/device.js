import { Dimensions, Platform } from 'react-native'

const height = Dimensions.get('window').height

export default {
  isIphoneX: height > 811 && Platform.OS === 'ios'
}
