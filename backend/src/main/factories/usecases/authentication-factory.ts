import env from '@/main/config/env'
import { AccountMongoRepository } from '@/infra/db'
import { ArgonAdapter, JwtAdapter } from '@/infra/cryptography'
import { DbAuthentication } from '@/data/usecases'
import { Authentication } from '@/domain/usecases'

export const makeDbAuthentication = (): Authentication => {
  const argonAdapter = new ArgonAdapter()
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  const accountMongoRepository = new AccountMongoRepository()  
  return new DbAuthentication(accountMongoRepository, argonAdapter, jwtAdapter, accountMongoRepository)
}
