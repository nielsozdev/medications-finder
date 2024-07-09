import { clog } from './clog'

export function printCpuUsage({ startTime, endTime, startCpuUsage }: { endTime: number; startCpuUsage: any; startTime: number }) {
  const endCpuUsage = process.cpuUsage()

  const elapsedTimeInSeconds = (endTime - startTime) / 1000
  const cpuUsage = calculateCpuUsage(startCpuUsage, endCpuUsage, elapsedTimeInSeconds)

  clog.info(`Tiempo de ejecución: ${elapsedTimeInSeconds.toFixed(3)}s`)
  clog.info(`Uso de CPU: ${cpuUsage.toFixed(2)}%`)
}

function calculateCpuUsage(startCpuUsage: any, endCpuUsage: any, elapsedTimeInSeconds: number) {
  const startUsage = startCpuUsage.user + startCpuUsage.system
  const endUsage = endCpuUsage.user + endCpuUsage.system
  const cpuUsage = (endUsage - startUsage) / (elapsedTimeInSeconds * 1000000) // Convertir a segundos

  // Limitar el valor al 100% para mostrar un porcentaje legible
  const limitedCpuUsage = Math.min(1, cpuUsage)

  return limitedCpuUsage * 100
}
