import {
  startAlarm,
  startAlarmTimer,
  stopAlarm,
  stopAlarmTimer,
  triggerAlarm
} from './alarm/actions'
import { startPlayback, stopPlayback } from './playback/actions'

import { loginRequest } from './auth/actions'

export default {
  loginRequest,
  startPlayback,
  stopPlayback,
  startAlarm,
  stopAlarm,
  stopAlarmTimer,
  triggerAlarm,
  startAlarmTimer
}
