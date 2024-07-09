import { type Page } from 'playwright'

export async function navigateTo (page: Page, {
  to,
  options = {},
}: {
  options?: any
  to: string
}) {
  try {
    console.log(`🚀 Navegando a: ${to}`)

    return await page.goto(to, {
      waitUntil: 'domcontentloaded',
      ...options,
    })
  } catch (err: any) {
    console.error(`:( navigateTo/ Error al cargar la página: ${err.message}`)

    if (err.message.includes('net::ERR_FAILED') || err.message.includes('net::ERR_TUNNEL_CONNECTION_FAILED')) {
      console.error(':( navigateTo/ Error 502: Respuesta incorrecta del servidor')
      throw new Error(':( navigateTo/ Error 502x: Respuesta incorrecta del servidor')
    }

    throw new Error(`🛑🛑🛑 :( navigateTo/ Error al cargar la página: ${err.message}`)
  }
}
