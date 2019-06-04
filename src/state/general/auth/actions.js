import { PersistedActions } from '../../'
import { SpotifyService } from '../../../services'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGOUT = 'LOGOUT'

export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload
})
export const loginFailure = payload => ({
  type: LOGIN_FAILURE,
  payload
})

export const loginRequest = payload => async dispatch => {
  dispatch({
    type: LOGIN_REQUEST,
    payload
  })

  try {
    const session = await SpotifyService.login()

    dispatch(loginSuccess(session))
    return Promise.resolve(session)
  } catch (err) {
    dispatch(loginFailure(err))
    return Promise.reject(err)
  }
}
