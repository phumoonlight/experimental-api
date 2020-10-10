import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { connectDatabase } from './connect-database'
import { traceRequest } from './common/request-tracer'
import { tagRouter } from './feature-tag/tag-module'
import { tagCollectionRouter } from './feature-tagcollection/tagcollection-module'
import { ENV, URL, AVAILABLE_ROUTES } from './config'

connectDatabase()

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(traceRequest())
app.use('/tags', tagRouter)
app.use('/tagcollections', tagCollectionRouter)

app.get('/', (req, res) => {
  res.json({
    author_github: URL.authorGithub,
    github_repo_url: URL.repository,
    available_routes: AVAILABLE_ROUTES,
  })
})

app.listen(ENV.port, () => {
  console.info('[server] app listening')
  console.info(`[server] port: ${ENV.port}`)
  console.info(`[server] env: ${ENV.nodeEnv}`)
})
