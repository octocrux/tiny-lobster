import { createReadStream } from 'fs'
import { createInterface } from 'readline'

type CornerLines = {
  firstLine: string;
  lastLine: string;
}

export const readCornerLines = (fileName: string, timeout = 20000): Promise<CornerLines> => {
  const inStream = createReadStream(fileName, { encoding: 'utf8' })

  return new Promise((resolve, reject)=> {
    const rl = createInterface(inStream)
    const failTimeout = setTimeout(reject, timeout)

    let firstLineWritten = false
    let firstLine = ''
    let lastLine = ''

    rl.on('line', (line) => {
      if (!firstLineWritten) {
        firstLine = line
        firstLineWritten = true
      }

      lastLine = line
    })

    rl.on('error', error => {
      clearTimeout(failTimeout)
      reject(error)
    })

    rl.on('close', () => {
      clearTimeout(failTimeout)
      resolve({ firstLine, lastLine })
    })
  })
}
