import 'core-js/stable'
import 'regenerator-runtime/runtime'
import express from 'express'
import bodyParser from 'body-parser'
import { PORT, GITHUB_REPO_URL, AVAILABLE_ROUTES } from './config'
import { TagRouter } from './features/tags'
import './mongo'

const app = express()
app.use(bodyParser.json())
app.use('/tags', TagRouter)

app.get('/', (req, res) => res.send({
  github_repo_url: GITHUB_REPO_URL,
  routes: AVAILABLE_ROUTES,
}))

app.listen(PORT, () => {
  console.info(`
    app listening at port ${PORT}
    env: ${process.env.NODE_ENV}
  `)
})
