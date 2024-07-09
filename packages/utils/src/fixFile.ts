import { exec } from 'node:child_process'
import { promisify } from 'util'

import { clog } from './clog'

export async function fixFile(path: string) {
  clog.info(`Fixing file: ${path}`)

  const { stdout, stderr } = await promisify(exec)(`eslint --fix ${path}`)

  clog.info('🔨🪚🔧⚙️ Fixing file done!')

  clog.info(stdout)
  clog.error(stderr)
}
