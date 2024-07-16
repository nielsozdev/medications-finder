import { type GetBrowserAndPageArgs, getBrowserAndPageHandler } from './getBrowserAndPageHandler'
// import { makeRequestWithProxy } from './makeRequestWithProxy'

export async function getBrowserAndPage(args: GetBrowserAndPageArgs = {}) {
  // if (args.proxyUrl) {
  // return await makeRequestWithProxy(args)
  // }

  return await getBrowserAndPageHandler(args)
}
