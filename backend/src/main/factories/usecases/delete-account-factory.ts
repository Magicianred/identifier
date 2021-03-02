import { DbDeleteAccount } from '@/data/usecases'
import { DeleteAccount } from '@/domain/usecases'
import { AccountMongoRepository } from '@/infra/db'

export const makeDbDeleteAccount = (): DeleteAccount => {
  const accountMongoRepository = new AccountMongoRepository()
  return new DbDeleteAccount(accountMongoRepository, accountMongoRepository)
}
