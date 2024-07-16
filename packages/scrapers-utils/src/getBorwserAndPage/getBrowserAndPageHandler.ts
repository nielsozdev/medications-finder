import { chromium, type BrowserContext, type Page } from 'playwright'

import { getErrorMessage } from '@noz/utils'

export interface GetBrowserAndPageArgs {
  config?: { screenSize: keyof typeof screensSizes }
  options?: any
  proxyUrl?: string
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

const proxyUrl = 'http://50.223.242.103:80'
const navigator = chromium

export async function getBrowserAndPageHandler(args: GetBrowserAndPageArgs = {}) {
  console.log('💻🧭 Iniciando navegador...')
  try {
    const {
      options = {},
      config = {
        screenSize: 'hd',
      },
      proxyUrl: customProxyUrl,
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

    const browser = await navigator.launch(browserOptions)

    let contextOptions: any = {
      javaScriptEnabled: true,
    }

    if (customProxyUrl) {
      contextOptions = {
        ...contextOptions,
        proxy: {
          server: customProxyUrl,
        },
      }
    } else if (proxyUrl) {
      contextOptions = {
        ...contextOptions,
        proxy: {
          server: proxyUrl,
        },
      }
    }

    const context: BrowserContext = await browser.newContext(contextOptions)
    const page: Page = await context.newPage()

    await page.setViewportSize(screensSizes[config.screenSize])

    return { browser, page }
  } catch (error) {
    throw new Error(`Error al iniciar el navegador: ${getErrorMessage(error)}`)
  }
}
