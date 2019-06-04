import { START_ALARM, STOP_ALARM } from './actions'

const INITIAL_STATE = {
  isAlarmActive: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_ALARM:
      return {
        ...state,
        isAlarmActive: true
      }
    case STOP_ALARM:
      return {
        ...state,
        isAlarmActive: false
      }
    default:
      return state
  }
}
