import { createContext } from 'react'

import { type createAppStore } from '~/context/AppStoreProvider/app.store'

export type AppStoreApi = ReturnType<typeof createAppStore>

export const AppStoreContext = createContext<AppStoreApi | undefined>(undefined)
