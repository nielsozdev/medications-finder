import { chromium, type Page, type BrowserContext } from 'playwright'

import { getErrorMessage } from '@noz/utils'

export interface GetBrowserAndPageArgs {
  config?: { screenSize: keyof ScreenSizes }
  options?: any
  proxyUrl?: string | undefined
}

const screensSizes = {
  sd: { width: 640, height: 480 },
  qhd: { width: 960, height: 540 },
  hd: { width: 1280, height: 720 },
  fhd: { width: 1920, height: 1080 },
  '2K': { width: 2560, height: 1440 },
  '4K': { width: 3840, height: 2160 },
  '8K': { width: 7680, height: 4320 },
} as const

type ScreenSizes = typeof screensSizes
export async function getBrowserAndPageHandler (args: GetBrowserAndPageArgs = {}) {
  console.log('💻🧭 Iniciando navegador...')
  try {
    const {
      proxyUrl = undefined,
      options = {},
      config = {
        screenSize: 'hd',
      },
    } = args

    const browserOptions = {
      headless: false,
      args: [
        '--start-maximized',
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-gpu',
        '--disable-dev-shm-usage',
      ],
      ...options,
    }

    if (proxyUrl) {
      browserOptions.proxy = proxyUrl
    }

    const browser = await chromium.launch(browserOptions)

    const context: BrowserContext = await browser.newContext({ javaScriptEnabled: true })
    const page: Page = await context.newPage()

    await page.setViewportSize(screensSizes[`${config.screenSize}`])

    return { browser, page }
  } catch (error) {
    // throw new Error(`Error al alvantar el navegador ${err.message}`)
    throw new Error(`Error al alzar el navegador: ${getErrorMessage(error)}`)
  }
}
