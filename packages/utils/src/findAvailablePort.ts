// import net from 'node:net'
import net, { type AddressInfo } from 'node:net'

async function findAvailablePort(desiredPort: number): Promise<number> {
  return await new Promise((resolve, reject) => {
    const server = net.createServer()

    server.listen(desiredPort, () => {
      const { port } = server.address() as AddressInfo
      server.close(() => {
        resolve(port)
      })
    })

    server.on('error', (err: NodeJS.ErrnoException) => {
      if (err.code === 'EADDRINUSE') {
        findAvailablePort(0).then((port) => resolve(port))
      } else {
        reject(err)
      }
    })
  })
}

export { findAvailablePort }
