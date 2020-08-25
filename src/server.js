import 'core-js/stable'
import 'regenerator-runtime/runtime'
import express from 'express'
import bodyParser from 'body-parser'
import { PORT, GITHUB_REPO_URL, AVAILABLE_ROUTES } from './config'
import { trace } from './common/request-tracer'
import { getTagRouter } from './features/get-tag'
import { getTagCollectionRouter } from './features/get-tag-collection'
import { createTagRouter } from './features/create-tag'
import { createTagCollectionRouter } from './features/create-tag-collection'
import { deleteTagRouter } from './features/delete-tag'
import { connectDatabase } from './database'

connectDatabase()

const app = express()

app.use(bodyParser.json())
app.use(trace())
app.use('/tags', [
  getTagRouter,
  getTagCollectionRouter,
  createTagRouter,
  createTagCollectionRouter,
  deleteTagRouter,
])

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
