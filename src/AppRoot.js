import React, { useState } from 'react'
import { Text, View } from 'react-native'

import Containers from './containers'

// import AppNavigation from './navigation'

// import { SpotifyService } from './services'

// const AppRoot = () => {
//   const [appReady, setAppReady] = useState(false)

//   useEffect(() => {
//     SpotifyService.initializeClient().then(status => setAppReady(true))
//   }, [])

//   if (!appReady) return null

//   return (
//     <React.Fragment>
//       <Containers.ActiveAlarmModal />
//       <AppNavigation />
//     </React.Fragment>
//   )
// }

// export default AppRoot

const AppRoot = () => {
  const [state, setstate] = useState('pewpew')

  return <View>{/* <AppNavigation /> */}</View>
}

export default AppRoot
