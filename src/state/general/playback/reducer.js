import { STARTED_PLAYBACK, STOPPED_PLAYBACK } from './actions'

const INITIAL_STATE = {
  playbackTrack: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STARTED_PLAYBACK:
      return {
        ...state,
        playbackTrack: action.payload || state.playbackTrack
      }
    case STOPPED_PLAYBACK:
      return {
        ...state,
        playbackTrack: null
      }
    default:
      return state
  }
}
