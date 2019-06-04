import { CLEAR_AUTH, UPDATE_AUTH } from './actions'

const INITIAL_STATE = null

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case UPDATE_AUTH:
      return { ...payload }
    case CLEAR_AUTH: {
      return INITIAL_STATE
    }
    default:
      return state
  }
}
