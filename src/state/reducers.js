import { GeneralReducers } from '.'
import { PersistedReducers } from './'
import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage'

const config = {
  key: 'root',
  storage,
  blacklist: ['general'],
  debug: true
}

export default persistCombineReducers(config, {
  general: GeneralReducers,
  persisted: PersistedReducers
})
