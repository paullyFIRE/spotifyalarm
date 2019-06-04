import { AlarmTimerService } from '../../../services'

export const UPDATE_ALARM_TIME = 'UPDATE_ALARM_TIME'
export const UPDATE_SELECTED_TRACK = 'UPDATE_SELECTED_TRACK'
export const UPDATE_SELECTED_PLAYLIST = 'UPDATE_SELECTED_PLAYLIST'
export const CLEAR_SELECTED_TRACK = 'CLEAR_SELECTED_TRACK'
export const PLAYBACK_TYPES = {
  PLAYLIST: 'PLAYLIST',
  TRACK: 'TRACK'
}

export const updateSelectedTrack = (payload = {}) => ({
  type: UPDATE_SELECTED_TRACK,
  payload
})

export const updateSelectedPlaylist = (payload = {}) => ({
  type: UPDATE_SELECTED_PLAYLIST,
  payload
})

export const clearSelectedTrack = (payload = {}) => ({
  type: CLEAR_SELECTED_TRACK,
  payload
})

export const updateAlarmTime = payload => dispatch => {
  dispatch({ type: 'UPDATE_ALARM_TIME', payload })

  AlarmTimerService.updateAlarmTime(payload)
}
