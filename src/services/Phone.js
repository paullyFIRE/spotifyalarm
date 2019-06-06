import * as Brightness from 'expo-brightness'

import { GeneralActions, PersistedActions } from '../state'

class PhoneService {
  initialBrightness = null
  alarmBrightness = 0.15
  dimmBrightnessTimeout = null
  store = null

  constructor() {}

  injectStore = store => {
    this.store = store
  }

  alarmSleep = async () => {
    this.initialBrightness = await Brightness.getBrightnessAsync()
    this.dimmBrightnessTimeout = setTimeout(
      () => Brightness.setBrightnessAsync(0.15),
      4500
    )
  }

  alarmWakeOrCancel = async () => {
    clearTimeout(this.dimmBrightnessTimeout)
    await Brightness.setBrightnessAsync(this.initialBrightness || 0.5)
  }
}

export default new PhoneService()
