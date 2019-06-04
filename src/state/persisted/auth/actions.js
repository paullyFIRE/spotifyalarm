export const UPDATE_AUTH = 'UPDATE_AUTH'
export const CLEAR_AUTH = 'CLEAR_AUTH'

export const updateAuth = payload => ({
  type: UPDATE_AUTH,
  payload
})

export const clearAuth = () => ({
  type: CLEAR_AUTH
})
