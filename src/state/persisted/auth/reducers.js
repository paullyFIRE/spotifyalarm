import { CLEAR_AUTH, UPDATE_AUTH } from './actions'

const INITIAL_STATE = {
  refreshToken: null,
  accessToken: null,
  expireTime: null,
  scopes: []
}

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case UPDATE_AUTH:
      return {
        refreshToken: payload.refreshToken || state.refreshToken,
        accessToken: payload.accessToken || state.accessToken,
        expireTime: payload.expireTime || state.expireTime,
        scopes: payload.scopes || state.scopes
      }
    case CLEAR_AUTH: {
      return { ...INITIAL_STATE }
    }
    default:
      return state
  }
}
