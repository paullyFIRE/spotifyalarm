import { GeneralActions } from '../state'
import moment from 'moment'

class AlarmTimerService {
  alarmInverval = null
  alarmTime = null
  store = null

  injectStore = store => {
    this.store = store
  }

  updateAlarmTime = newAlarmTime => {
    this.alarmTime = newAlarmTime
  }

  calculateTimeToAlarm = () => {
    if (!this.alarmTime) {
      this.updateAlarmTime(this.store.getState().persisted.alarm.alarmTime)
    }

    const current = moment()
    const alarmTime = moment(this.alarmTime).seconds(0)

    if (alarmTime.isBefore(current)) {
      alarmTime.add(1, 'days')
    }

    return alarmTime.diff(current, 'seconds')
  }

  startAlarm = async () => {
    const alarmTimeout = this.calculateTimeToAlarm()

    this.alarmInverval = setTimeout(() => {
      this.store.dispatch(GeneralActions.triggerAlarm())
    }, alarmTimeout * 1000)

    this.store.dispatch(
      GeneralActions.startAlarmTimer({ init: new Date(), timeout: alarmTimeout })
    )
  }

  stopAlarm = () => {
    clearTimeout(this.alarmInverval)
    this.alarmInverval = null

    this.store.dispatch(GeneralActions.stopAlarmTimer({ init: new Date() }))
  }
}

export default new AlarmTimerService()
