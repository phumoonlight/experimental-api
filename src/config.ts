import dotenv from 'dotenv'

dotenv.config()

const DEV = 'development'
const DEV_HOST = 'http://localhost:8080'
const PRODUCTION_HOST = 'https://experimentalapi.herokuapp.com'
const isDevelopment = process.env.NODE_ENV === DEV
const activeHost = isDevelopment ? DEV_HOST : PRODUCTION_HOST

export const ENV = {
  port: process.env.PORT || 8080,
  nodeEnv: process.env.NODE_ENV,
  mongoConnection: process.env.MONGO_CONNECTION,
  host: activeHost,
}

export const URL = {
  authorGithub: 'https://github.com/phumoonlight',
  repository: 'https://github.com/phumoonlight/experimental-api',
}

export const AVAILABLE_ROUTES = [
  `${activeHost}/tags`,
  `${activeHost}/tags/{tag}`,
]

export const VALIDATION_MESSAGE = {
  required: 'field required',
  string: 'must be type {string}',
  object: 'must be type {object}',
  mongoId: 'must be {mongoid}',
  badTagRefId: 'bad tag name',
  noEmpty: 'cannot be empty value',
  noEmptyTagRefId: 'tag reference id cannot be empty',
}

export const DEFAULT = {
  tagName: 'unnamed tag',
  tagDescription: 'no description'
}

// export const MONGO_COLLECTIONS = {
//   tags: 'tags',
//   tagsCollections: 'tags-collections',
// }

// export const VALIDATION = {
//   restrictedTagName: 'collections',
//   badTagNameRegex: /[^a-z0-9-]/gi,
//   message: {
//     string: 'must be type {string}',
//     object: 'must be type {object}',
//     restrictedTagName: 'restricted tag name',
//     badTagName: 'bad tag name',
//     required: 'field required',
//   },
// }
