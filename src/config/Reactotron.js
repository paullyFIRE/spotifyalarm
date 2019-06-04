/* eslint-disable import/no-extraneous-dependencies */
import Reactotron, { networking } from 'reactotron-react-native'

import { reactotronRedux } from 'reactotron-redux'

const reactotron = Reactotron.configure()
  .useReactNative()
  .use(networking())
  .use(reactotronRedux())
  .connect()

// eslint-disable-next-line
console.tron = Reactotron

Reactotron.clear()

export default reactotron
