import mongoose from 'mongoose'

// import { mongoConfig } from './config'

let dbConnection

export async function connectDB({ config }) {
  const { password, username, database } = config

  const uri = `mongodb+srv://${username}:${password}@medicationcluster.9h1vbzt.mongodb.net/${database}?retryWrites=true&w=majority&appName=MedicationCluster`

  try {
    dbConnection = await mongoose.connect(uri)
    console.log('Connected to MongoDB')
  } catch (err) {
    console.error('Error connecting to MongoDB:', err)
  }
}

export async function disconnectDB() {
  if (dbConnection) {
    try {
      await dbConnection.disconnect()
      console.log('Disconnected from MongoDB')
    } catch (err) {
      console.error('Error disconnecting from MongoDB:', err)
    }
  }
}
