type VarName = 'PORT' | 'NODE_ENV'

type Config = {
  [index in VarName]: string;
}

const {
  PORT = '',
  NODE_ENV = ''
} = process.env

const config: Config = {
  PORT,
  NODE_ENV
}

export default config
