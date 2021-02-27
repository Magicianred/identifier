import 'module-alias/register'
import env from '@/main/config/env'
import { MongoHelper } from '@/infra/db'

MongoHelper.connect(env.mongoUrl)
  .then(async () => {
    const app = (await import('./config/app')).default
    app.listen(Number(env.port), env.host, () => console.log(`Server running at http://localhost:${env.port}/graphql`))
  })
  .catch(console.error)
