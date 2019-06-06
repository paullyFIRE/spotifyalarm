import * as Brightness from 'expo-brightness'

import { GeneralActions, PersistedActions } from '../state'

class PhoneService {
  initialBrightness = null
  alarmBrightness = 0.15
  dimmBrightnessInterval = null
  store = null

  constructor() {}

  injectStore = store => {
    this.store = store
  }

  alarmSleep = async () => {
    this.initialBrightness = await Brightness.getBrightnessAsync()
    setTimeout(() => Brightness.setBrightnessAsync(0.15), 4500)
  }

  alarmWakeOrCancel = async () => {
    await Brightness.setBrightnessAsync(this.initialBrightness || 0.5)
  }
}

export default new PhoneService()
