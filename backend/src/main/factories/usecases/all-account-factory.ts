import { DbAllAccount } from '@/data/usecases'
import { AllAccount } from '@/domain/usecases'
import { AccountMongoRepository } from '@/infra/db'

export const makeDbAllAccount = (): AllAccount => {
  const accountMongoRepository = new AccountMongoRepository()
  return new DbAllAccount(accountMongoRepository)
}
