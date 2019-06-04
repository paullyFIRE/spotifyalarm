import Spotify from 'rn-spotify-sdk'
console.log('Spotify: ', Spotify)

export const getVolume = Spotify.getVolumeAsync
export const setVolume = Spotify.setVolume
export const setPlaying = Spotify.setPlaying
export const on = Spotify.on
export const playURI = Spotify.playURI
export const logout = Spotify.logout
export const loginWithSession = Spotify.loginWithSession
export const renewSession = Spotify.renewSession
export const getSession = Spotify.getSessionAsync
export const initialize = Spotify.initialize
export const login = Spotify.login
export const isInitialized = Spotify.isInitializedAsync

export const getCurrentSongMeta = async () => {
  try {
    const meta = await Spotify.getPlaybackMetadataAsync()

    if (!meta.currentTrack) throw new Error('Current track information is not available.')
    return Promise.resolve({ ...meta.currentTrack })
  } catch (err) {
    return Promise.reject(err.message || err)
  }
}

export const getUser = async () => {
  try {
    const user = await Spotify.getMe()
    if (!user) throw new Error('Error retrieving user.')

    const { display_name, country, images, id } = user
    const payload = { display_name, country, images, id }

    if (!images.length) delete payload.images
    return Promise.resolve(payload)
  } catch (err) {
    return Promise.reject(err.message || err)
  }
}

export const getUserPlaylists = async () => {
  try {
    //https://developer.spotify.com/documentation/web-api/reference/playlists/get-a-list-of-current-users-playlists/
    const userPlaylists = await Spotify.sendRequest('v1/me/playlists', 'GET', {}, false)
    if (!userPlaylists.items) throw new Error('Unable to retrieve user playlists.')

    const playlists = userPlaylists.items.map(
      ({
        name: playlistName,
        images: [playlistImage],
        id: playlistId,
        tracks: { total: totalTracks },
        owner: { display_name: ownerDisplayName }
      }) => {
        const { url: playlistImageURL } = playlistImage

        return {
          playlistName,
          playlistImageURL,
          playlistId,
          totalTracks,
          ownerDisplayName
        }
      }
    )

    return Promise.resolve(playlists)
  } catch (err) {
    return Promise.reject(err.message || err)
  }
}

export const getPlaylistTracks = async playlistId => {
  try {
    //https://developer.spotify.com/documentation/web-api/reference/playlists/get-playlists-tracks/
    const tracksRequest = await Spotify.sendRequest(
      `v1/playlists/${playlistId}/tracks`,
      'GET',
      {},
      false
    )

    const playlistTracks = tracksRequest.items.map(trackMeta => {
      const {
        track: {
          uri: trackUri,
          name: trackName,
          artists: [{ name: artistName }],
          album: {
            name: albumName,
            images: [{ url: imageUrl }]
          }
        }
      } = trackMeta

      return { trackUri, trackName, artistName, albumName, imageUrl }
    })

    return Promise.resolve(playlistTracks)
  } catch (err) {
    return Promise.reject(err.message || err)
  }
}
