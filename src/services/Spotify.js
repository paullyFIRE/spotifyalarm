import * as SpotifyApi from '../state/SpotifyApi'

import { GeneralActions, PersistedActions } from '../state'

class SpotifyService {
  isPlaying = false
  playbackUri = null
  fadeInInterval = null
  store = null

  constructor() {
    SpotifyApi.on('trackChange', args => {
      const { playing } = args.state

      if (playing) {
        return this.setVolume(0.0)
      }

      if (!playing) {
        this.store.dispatch(GeneralActions.stopAlarm())
      }
    })
  }

  injectStore = store => {
    this.store = store
  }

  tryWithLoginRetry = async fn => {
    try {
      await fn()
    } catch (err) {
      if (/NSURLErrorDomain error -1012./gi.test(err)) {
        await this.login()
        await fn()
      }
    }
  }

  initializeClient = () =>
    SpotifyApi.initialize({
      clientID: '62d70803519d49539606982c03a87192',
      sessionUserDefaultsKey: 'SpotifyAlarmSession',
      redirectURL: 'spotifyalarm://auth',
      tokenSwapURL: 'http://178.62.90.98:3050/swap',
      tokenRefreshURL: 'http://178.62.90.98:3050/refresh',
      scopes: [
        'user-read-private',
        'playlist-read',
        'playlist-read-private',
        'user-library-read',
        'streaming'
      ]
    })

  login = async () => {
    const isInit = await SpotifyApi.isInitialized()

    if (!isInit) {
      // renew sesion or use loginWithSession
      const refresh = await SpotifyApi.renewSession()
      return refresh
    }

    await SpotifyApi.login()
    const session = await SpotifyApi.getSession()
    this.store.dispatch(PersistedActions.updateAuth(session))

    return session
  }

  volumeFadeIn = () => {
    const VOLUME_INCREMENT_INTERVALS = 1000 / 8
    const FADE_IN_TIME = 1000 * 60
    const START_VOLUME = 0.0
    const ALARM_VOLUME = 1
    const VOLUME_INCREMENT = ALARM_VOLUME / (FADE_IN_TIME / VOLUME_INCREMENT_INTERVALS)

    let volume = START_VOLUME

    this.fadeInInterval = setInterval(() => {
      if (volume >= ALARM_VOLUME) return clearInterval(this.fadeInInterval)

      SpotifyApi.setVolume(volume)
      volume += VOLUME_INCREMENT
    }, VOLUME_INCREMENT_INTERVALS)
  }

  startPlayback = async playbackUri => {
    await this.tryWithLoginRetry(() => SpotifyApi.playURI(playbackUri, 0, 0))
    this.isPlaying = true
    this.playbackUri = playbackUri

    this.volumeFadeIn()

    return { isPlaying: this.isPlaying, playbackUri: this.playbackUri }
  }

  stopPlayback = async () => {
    try {
      if (this.isPlaying) SpotifyApi.setPlaying(false)
      this.isPlaying = false

      if (this.fadeInInterval) clearInterval(this.fadeInInterval)
      return { isPlaying: this.isPlaying }
    } catch (err) {
      console.log('err: ', err)
    }
  }

  getCurrentSong = () => SpotifyApi.getCurrentSongMeta()
  getUser = () => SpotifyApi.getUser()
  getUserPlaylists = () => SpotifyApi.getUserPlaylists()
  getPlaylistTracks = () => SpotifyApi.getPlaylistTracks()
  getVolume = async () => {
    this.currentVolume = await SpotifyApi.getVolume()
    return this.currentVolume
  }
  setVolume = SpotifyApi.setVolume
}

export default new SpotifyService()
