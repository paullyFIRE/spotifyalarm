export const UPDATE_PLAYLISTS = 'UPDATE_PLAYLISTS'
export const CLEAR_PLAYLISTS = 'CLEAR_PLAYLISTS'

export const updatePlaylists = (payload = {}) => ({
  type: UPDATE_PLAYLISTS,
  payload
})

export const clearPlaylists = (payload = {}) => ({
  type: CLEAR_PLAYLISTS,
  payload
})
