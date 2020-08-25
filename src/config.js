import dotenv from 'dotenv'

dotenv.config()

export const {
  PORT = 8080,
  NODE_ENV,
  MONGO_CONNECTION,
} = process.env

export const DEV_URL = 'http://localhost:8080/'
export const PROD_URL = 'https://experimentalapi.herokuapp.com/'
export const GITHUB_REPO_URL = 'https://github.com/phumoonlight/experimental-api'
export const SERVER_URL = NODE_ENV === 'development' ? DEV_URL : PROD_URL

export const MONGO_COLLECTIONS = {
  tags: 'tags',
  tagsData: 'tags-datas',
}

export const AVAILABLE_ROUTES = [
  `${SERVER_URL}tags`,
  `${SERVER_URL}tags/{tag}`,
]
