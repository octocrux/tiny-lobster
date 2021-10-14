import { join } from 'path'
import { createLogger, format, transports } from 'winston'

import config from './env'

const { combine, timestamp, label, printf } = format

const myFormat = printf(({ level, message, label: msgLabel, timestamp: msgTimestamp }) => {
  return `${msgTimestamp} [${msgLabel}] ${level}: ${message}`
})

const getLogName = () => {
  const DAY_MS = 24 * 60 * 60 * 1000
  const now = Date.now()
  const todayTimestamp = now - now % DAY_MS

  return join(process.cwd(), 'logs', `${config.NODE_ENV}_${todayTimestamp}.log`)
}

const getLogger = () => {
  if (config.NODE_ENV === 'production') {
    return createLogger({
      level: 'info',
      format: combine(
        label({ label: 'Tiny Lobster' }),
        timestamp(),
        myFormat
      ),
      transports: [
        new transports.File({ filename: getLogName() })
      ]
    })
  }

  return createLogger({
    level: 'silly',
    format: combine(
      label({ label: 'Tiny Lobster Dev' }),
      timestamp(),
      myFormat
    ),
    transports: [
      new transports.Console(),
      new transports.File({ filename: getLogName() })
    ]
  })
}

export const logger = getLogger()
