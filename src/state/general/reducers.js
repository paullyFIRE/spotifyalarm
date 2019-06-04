import AlarmReducers from './alarm/reducers'
import PlaybackReducers from './playback/reducer'
import { combineReducers } from 'redux'

export default combineReducers({ playback: PlaybackReducers, alarm: AlarmReducers })
