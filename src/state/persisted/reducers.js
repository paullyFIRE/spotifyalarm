import AlarmReducers from './alarm/reducers'
import PlaylistReducer from './playlists/reducers'
import AuthReducers from './auth/reducers'
import { combineReducers } from 'redux'

export default combineReducers({
  auth: AuthReducers,
  playlists: PlaylistReducer,
  alarm: AlarmReducers
})
