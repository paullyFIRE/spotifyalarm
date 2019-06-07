// import { PersistedActions } from '../../'
import { SpotifyService } from '../../../services'

export const GET_USER_REQUEST = 'GET_USER_REQUEST'
export const GET_USER_FAILURE = 'GET_USER_FAILURE'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const LOGOUT = 'LOGOUT'

export const logout = payload => async dispatch => {
  dispatch({ type: LOGOUT })

  // TODO: Actually log out of the SpotifyApi Auth.

  SpotifyService.logout()
  dispatch(PersistedActions.clearAuth())
  dispatch(PersistedActions.clearPlaylists())
  dispatch(PersistedActions.clearPersistedAlarm())
  return Promise.resolve()
}

export const getUserSuccess = payload => ({
  type: GET_USER_SUCCESS,
  payload
})

export const getUserFailure = payload => ({
  type: GET_USER_FAILURE,
  payload
})

export const getUserRequest = payload => async dispatch => {
  dispatch({
    type: GET_USER_REQUEST,
    payload
  })

  try {
    const userDetails = await SpotifyService.getUser()

    dispatch(getUserSuccess(userDetails))
    return Promise.resolve(userDetails)
  } catch (err) {
    dispatch(getUserFailure(err))
    return Promise.reject(err)
  }
}
