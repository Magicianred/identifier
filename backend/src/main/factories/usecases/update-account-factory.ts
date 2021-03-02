import { DbUpdateAccount } from '@/data/usecases'
import { UpdateAccount } from '@/domain/usecases'
import { AccountMongoRepository } from '@/infra/db'

export const makeDbUpdateAccount = (): UpdateAccount => {
  const accountMongoRepository = new AccountMongoRepository()
  return new DbUpdateAccount(accountMongoRepository, accountMongoRepository)
}
