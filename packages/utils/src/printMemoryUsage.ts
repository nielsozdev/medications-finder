export function printMemoryUsage () {
  const memoryUsage = process.memoryUsage()
  const usedMemoryMB = memoryUsage.heapUsed / (1024 * 1024) // Convertir a MB
  const totalMemoryMB = memoryUsage.heapTotal / (1024 * 1024) // Convertir a MB

  console.log(`Uso de RAM: ${usedMemoryMB.toFixed(2)} MB de ${totalMemoryMB.toFixed(2)} MB`)
}
