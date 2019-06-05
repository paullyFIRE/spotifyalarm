import {
  CLEAR_PERSISTED_ALARM,
  CLEAR_SELECTED_TRACK,
  PLAYBACK_TYPES,
  UPDATE_ALARM_TIME,
  UPDATE_SELECTED_PLAYLIST,
  UPDATE_SELECTED_TRACK
} from './actions'

const INITIAL_STATE = {
  alarmTime: new Date(),
  alarmTrack: null,
  selectedPlaylist: null,
  selectedTrack: null,
  playbackType: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_TRACK:
      return {
        ...state,
        playbackType: PLAYBACK_TYPES.TRACK,
        selectedPlaylist: null,
        selectedTrack: {
          albumName: action.payload.albumName || null,
          artistName: action.payload.artistName || null,
          imageUrl: action.payload.imageUrl || null,
          trackName: action.payload.trackName || null,
          trackUri: action.payload.trackUri || null
        }
      }
    case UPDATE_SELECTED_PLAYLIST:
      return {
        ...state,
        playbackType: PLAYBACK_TYPES.PLAYLIST,
        selectedTrack: null,
        selectedPlaylist: {
          playlistName: action.payload.playlistName || null,
          playlistImageURL: action.payload.playlistImageURL || null,
          totalTracks: action.payload.totalTracks || null,
          playlistId: action.payload.playlistId || null,
          ownerDisplayName: action.payload.ownerDisplayName || null,
          trackList: action.payload.trackList || null
        }
      }
    case UPDATE_ALARM_TIME:
      return {
        ...state,
        alarmTime: action.payload
      }
    case CLEAR_SELECTED_TRACK:
      return {
        ...state,
        selectedTrack: null
      }
    case CLEAR_PERSISTED_ALARM:
      return {
        ...INITIAL_STATE
      }
    default:
      return state
  }
}
