import { proxiesList } from '../config/proxies'

import { getBrowserAndPageHandler, type GetBrowserAndPageArgs } from './getBrowserAndPageHandler'

export async function makeRequestWithProxy (args: GetBrowserAndPageArgs = {}) {
  try {
    const proxy = proxiesList[Math.floor(Math.random() * proxiesList.length)]

    return await getBrowserAndPageHandler({ proxyUrl: proxy, ...args })
  } catch (err) {
    throw new Error('Error al cargar la página')
  }
}
