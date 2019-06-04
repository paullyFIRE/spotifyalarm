import { AlarmTimerService } from '../../../services'
import { GeneralActions } from '../..'

export const START_ALARM = 'START_ALARM'
export const STOP_ALARM = 'STOP_ALARM'
export const TRIGGER_ALARM = 'TRIGGER_ALARM'
export const START_ALARM_TIMER = 'START_ALARM_TIMER'
export const STOP_ALARM_TIMER = 'STOP_ALARM_TIMER'

export const startAlarmTimer = payload => ({
  type: START_ALARM_TIMER,
  payload
})

export const stopAlarmTimer = payload => ({
  type: STOP_ALARM_TIMER,
  payload
})

export const startAlarm = payload => dispatch => {
  dispatch({
    type: START_ALARM,
    payload
  })

  AlarmTimerService.startAlarm()
}

export const stopAlarm = payload => dispatch => {
  dispatch({
    type: STOP_ALARM,
    payload
  })

  dispatch(GeneralActions.stopPlayback())
  AlarmTimerService.stopAlarm()
}

export const triggerAlarm = payload => dispatch => {
  dispatch({ type: TRIGGER_ALARM, payload })
  dispatch(GeneralActions.startPlayback())
}
