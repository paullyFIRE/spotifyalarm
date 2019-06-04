import { Dimensions } from 'react-native'
import Fonts from './Fonts'
import Helpers from '../functions/device'

const { width, height } = Dimensions.get('window')

const Metrics = {
  base: 8,
  width,
  height
}

const Colors = {
  primary: '#FFDD03',
  background: '#0A0A0A',
  secondaryBackground: '#112842',
  grey: '#e9e9e9',
  grey2: '#c9c9c9',
  white: '#FFF',
  black: '#000'
}

export { Fonts, Metrics, Colors, Helpers }
