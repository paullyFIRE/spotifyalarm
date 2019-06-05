import { loginRequest, logout } from './auth/actions'
import {
  startAlarm,
  startAlarmTimer,
  stopAlarm,
  stopAlarmTimer,
  triggerAlarm
} from './alarm/actions'
import { startPlayback, stopPlayback } from './playback/actions'

export default {
  loginRequest,
  logout,
  startPlayback,
  stopPlayback,
  startAlarm,
  stopAlarm,
  stopAlarmTimer,
  triggerAlarm,
  startAlarmTimer
}
