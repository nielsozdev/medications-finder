import chalk from 'chalk'

const logger = (...args: any[]) => {
  console.log(...args)
}

// // Combine styled and normal strings
// log(chalk.blue('Hello') + ' World' + chalk.red('!'))

// // Compose multiple styles using the chainable API
// log(chalk.blue.bgRed.bold('Hello world!'))

// // Pass in multiple arguments
// log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'))

// // Nest styles
// log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'))
// // Nest styles of the same type even (color, underline, background)
// log(chalk.green(
//   'I am a green line ' +
//   chalk.blue.underline.bold('with a blue substring') +
//   ' that becomes green again!'
// ))

// // ES2015 template literal
// log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `)
// log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'))
// log(chalk.hex('#DEADED').bold('Bold gray!'))

// const backgroundColor = '#FF0000' // Rojo
const error = chalk.bold.red
const warning = chalk.hex('#FFA500')
const info = chalk.hex('#007aff')
const bgInfoHex = chalk.bgHex('#007aff')
const message = chalk.hex('#ffd0e1')
const bgMessageHex = chalk.black.bgHex('#ffd0e1')

const purple = chalk.hex('#7e57c2')
const purpleBg = chalk.white.hex('#7e57c2')
const orange = chalk.hex('#ef6c00')
const orangeBg = chalk.black.hex('#ef6c00')
const ligthBlue = chalk.hex('#4fc3f7')
const ligthBlueBg = chalk.black.hex('#4fc3f7')
const teal = chalk.hex('#4db6ac')
const tealBg = chalk.black.hex('#4db6ac')
const gray = chalk.hex('#cfd8dc')
const grayBg = chalk.white.hex('#cfd8dc')

export const clog = {
  message: (...messages: any[]) => logger(message(...messages)),
  messageBg: (...messages: any[]) => logger(bgMessageHex(...messages)),
  message2: (...messages: any[]) => logger(purple(...messages)),
  message2Bg: (...messages: any[]) => logger(purpleBg(...messages)),
  message3: (...messages: any[]) => logger(orange(...messages)),
  message3Bg: (...messages: any[]) => logger(orangeBg(...messages)),
  message4: (...messages: any[]) => logger(ligthBlue(...messages)),
  message4Bg: (...messages: any[]) => logger(ligthBlueBg(...messages)),
  message5: (...messages: any[]) => logger(teal(...messages)),
  message5Bg: (...messages: any[]) => logger(tealBg(...messages)),
  message6: (...messages: any[]) => logger(gray(...messages)),
  message6Bg: (...messages: any[]) => logger(grayBg(...messages)),
  info: (...messages: any[]) => logger(info(...messages)),
  infoBg: (...messages: any[]) => logger(bgInfoHex(...messages)),
  warn: (...messages: any[]) => logger(warning(...messages)),
  warnBg: (...messages: any[]) => logger(chalk.black.bgYellow(...messages)),
  success: (...messages: any[]) => logger(chalk.green(...messages)),
  successBg: (...messages: any[]) => logger(chalk.black.bgGreen(...messages)),
  std: (...messages: any[]) => logger(...messages),
  data: (...messages: any[]) => logger(info(...messages)),
  dataBg: (...messages: any[]) => logger(chalk.white.bgBlue(...messages)),
  errorBg: (...err: any) => (err instanceof Error)
    ? logger(chalk.white.bgRed(err.message))
    : logger(chalk.white.bgRed(err)),

  error: (...err: any) => (err instanceof Error)
    ? logger(error(err.message))
    : logger(error(err)),
  // errorBg: (...messages: string[]) => log(chalk.white.bgRed(...messages)),
}
