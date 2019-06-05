import { clearAuth, updateAuth } from './auth/actions'
import {
  clearPersistedAlarm,
  clearSelectedTrack,
  updateAlarmTime,
  updateSelectedPlaylist,
  updateSelectedTrack
} from './alarm/actions'
import { clearPlaylists, updatePlaylists } from './playlists/actions'

export default {
  updateSelectedPlaylist,
  clearPersistedAlarm,
  updatePlaylists,
  clearPlaylists,
  updateSelectedTrack,
  clearSelectedTrack,
  updateAlarmTime,
  updateAuth,
  clearAuth
}
