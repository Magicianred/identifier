import setupApolloServer from './apollo-server'

import express from 'express'

const app = express()
setupApolloServer(app)
export default app
