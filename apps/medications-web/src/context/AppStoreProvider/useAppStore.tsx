import { useContext } from 'react'

import { useStore } from 'zustand'

import { type AppStore } from './app.store'
import { AppStoreContext } from './AppStoreContext'

export function useAppStore<T>(selector: (state: AppStore) => T): T {
  const appStoreContext = useContext(AppStoreContext)

  if (!appStoreContext) {
    throw new Error('useAppStore must be used within a AppStoreProvider')
  }

  return useStore(appStoreContext, selector)
}
