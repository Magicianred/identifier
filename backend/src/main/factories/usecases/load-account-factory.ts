import { DbLoadAccount } from '@/data/usecases'
import { LoadAccount } from '@/domain/usecases'
import { AccountMongoRepository } from '@/infra/db'

export const makeDbLoadAccount = (): LoadAccount => {
  const accountMongoRepository = new AccountMongoRepository()
  return new DbLoadAccount(accountMongoRepository)
}
