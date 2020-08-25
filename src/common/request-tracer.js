import chalk from 'chalk'

export const trace = () => (
  (req, res, next) => {
    console.info(
      chalk.green('[request-tracer]'),
      chalk.bold(req.method),
      chalk.gray(req.url),
    )
    next()
  }
)

export default trace
