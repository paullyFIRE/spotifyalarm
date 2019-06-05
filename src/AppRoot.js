import React, { useEffect, useState } from 'react'

import AppNavigation from './navigation'
import CodePush from 'react-native-code-push'
import CodePushConfig from './config/CodePush'
import Containers from './containers'
import { SpotifyService } from './services'

const AppRoot = () => {
  const [appReady, setAppReady] = useState(false)

  useEffect(() => {
    SpotifyService.initializeClient().then(status => setAppReady(true))
  }, [])

  if (!appReady) return null

  return (
    <React.Fragment>
      <Containers.ActiveAlarmModal />
      <AppNavigation />
    </React.Fragment>
  )
}

const CodePushAppRoot = CodePush(CodePushConfig)(AppRoot)

export default CodePushAppRoot
