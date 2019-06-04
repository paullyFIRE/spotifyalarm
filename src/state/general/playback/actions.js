import { PLAYBACK_TYPES } from '../../persisted/alarm/actions'
import { SpotifyService } from '../../../services'

export const START_PLAYBACK = 'START_PLAYBACK'
export const STARTED_PLAYBACK = 'STARTED_PLAYBACK'
export const STOP_PLAYBACK = 'STOP_PLAYBACK'
export const STOPPED_PLAYBACK = 'STOPPED_PLAYBACK'

export const stopPlayback = () => async (dispatch, getState) => {
  dispatch({ type: STOP_PLAYBACK })

  SpotifyService.stopPlayback()

  dispatch({ type: STOPPED_PLAYBACK })
}

export const startPlayback = trackUri => async (dispatch, getState) => {
  dispatch({ type: START_PLAYBACK, payload: trackUri })

  const { playbackType, selectedPlaylist, selectedTrack } = getState().persisted.alarm
  try {
    if (playbackType === PLAYBACK_TYPES.TRACK) {
      const { trackUri } = selectedTrack

      if (!trackUri) {
        throw new Error('No playlist or track to play available for playback')
      }

      SpotifyService.startPlayback(trackUri)

      dispatch({ type: STARTED_PLAYBACK, payload: selectedTrack })
      return Promise.resolve(selectedTrack)
    } else if (playbackType === PLAYBACK_TYPES.PLAYLIST) {
      const randomTrack =
        selectedPlaylist.trackList[
          Math.floor(Math.random() * selectedPlaylist.trackList.length)
        ]

      const { trackUri } = randomTrack

      if (!trackUri) {
        throw new Error('No playlist or track to play available for playback')
      }

      SpotifyService.startPlayback(trackUri)

      dispatch({ type: STARTED_PLAYBACK, payload: randomTrack })
      return Promise.resolve(randomTrack)
    }
  } catch (err) {
    return Promise.reject(err.message || err)
  }
}
