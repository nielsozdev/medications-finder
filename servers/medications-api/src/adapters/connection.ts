import { connectDB as connectDataBase, disconnectDB as disconnectDataBase } from '@noz/medications-core/src/mongoose/utils/connection'

import { dbConfig } from '~/config/db/config'

export async function connectDB() {
  return await connectDataBase({ config: dbConfig })
}

export async function disconnectDB() {
  return await disconnectDataBase()
}
