export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/identifier',
  port: process.env.PORT || 7777,
  host: process.env.HOST || '127.0.0.1',
  jwtSecret: process.env.JWT_SECRET || 'tj67O==5H'
}
