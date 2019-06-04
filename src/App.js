import * as Font from 'expo-font'

import { AlarmTimerService, SpotifyService } from './services'
import React, { useEffect, useState } from 'react'

import AppRoot from './AppRoot'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Provider } from 'react-redux'
import Store from './state/store'
import { StyleSheet } from 'react-native'
import { expoFontsConfig } from './config/Fonts'
import { persistStore } from 'redux-persist'

StyleSheet.setStyleAttributePreprocessor('fontFamily', Font.processFontFamily)

const persistor = persistStore(Store)
// persistor.purge()

SpotifyService.injectStore(Store)
AlarmTimerService.injectStore(Store)

export default function App() {
  const [isAppReady, setAppReady] = useState(false)

  useEffect(() => {
    Font.loadAsync(expoFontsConfig).then(() => setAppReady(true))
  }, [])

  if (!isAppReady) return null

  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <AppRoot />
      </PersistGate>
    </Provider>
  )
}
