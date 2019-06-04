import { clearPlaylists, updatePlaylists } from './playlists/actions'
import {
  clearSelectedTrack,
  updateAlarmTime,
  updateSelectedPlaylist,
  updateSelectedTrack
} from './alarm/actions'

import { updateAuth } from './auth/actions'

export default {
  updateSelectedPlaylist,
  updatePlaylists,
  clearPlaylists,
  updateSelectedTrack,
  clearSelectedTrack,
  updateAlarmTime,
  updateAuth
}
