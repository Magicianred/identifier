import { DbUpdateAccount } from '@/data/usecases'
import { UpdateAccount } from '@/domain/usecases'
import { ArgonAdapter } from '@/infra/cryptography'
import { AccountMongoRepository } from '@/infra/db'

export const makeDbUpdateAccount = (): UpdateAccount => {
  const argonAdapter = new ArgonAdapter()
  const accountMongoRepository = new AccountMongoRepository()
  return new DbUpdateAccount(argonAdapter, accountMongoRepository, accountMongoRepository)
}
