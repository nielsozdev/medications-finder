
export async function pressButtonNext ({ element }: any) {
  try {
    await element.evaluate((btn: any) => btn.click())
    console.log('Sguiente página')
  } catch (e) {
    console.log(e)
    throw new Error('Error al presionar el botón de siguiente página\n')
  }
}
