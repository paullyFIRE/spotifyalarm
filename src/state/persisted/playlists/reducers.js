const INITIAL_STATE = []

import { CLEAR_PLAYLISTS, UPDATE_PLAYLISTS } from './actions'

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_PLAYLISTS:
      return [...action.payload]
    case CLEAR_PLAYLISTS:
      return INITIAL_STATE
    default:
      return state
  }
}
