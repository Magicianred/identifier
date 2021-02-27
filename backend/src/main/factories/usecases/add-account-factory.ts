import { DbSignUpAccount } from '@/data/usecases'
import { SignUpAccount } from '@/domain/usecases'
import { AccountMongoRepository } from '@/infra/db'
import { ArgonAdapter } from '@/infra/cryptography'

export const makeDbAddAccount = (): SignUpAccount => {
  const argonAdapter = new ArgonAdapter()
  const accountMongoRepository = new AccountMongoRepository()
  return new DbSignUpAccount(argonAdapter, accountMongoRepository, accountMongoRepository)
}
