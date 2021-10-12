import { resolve } from 'path'
import { createLogger, format, transports } from 'winston'

const { combine, timestamp, label, printf } = format

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`
})

const { NODE_ENV } = process.env

const getLogName = () => {
  const DAY_MS = 24 * 60 * 60 * 1000
  const now = Date.now()
  const todayTimestamp = now - now % DAY_MS

  return resolve(__dirname, `../../logs/${NODE_ENV}_${todayTimestamp}.log`)
}

const getLogger = () => {
  if (NODE_ENV === 'production') {
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
