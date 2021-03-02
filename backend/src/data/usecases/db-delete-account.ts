import { DeleteAccount } from '@/domain/usecases'
import { DeleteAccountRepository, CheckAccountByEmailRepository } from '@/data/protocols'

export class DbDeleteAccount implements DeleteAccount {
  constructor(
    private readonly deleteAccountRepository: DeleteAccountRepository,
    private readonly checkAccountByEmailRepository: CheckAccountByEmailRepository
  ) { }

  async delete(accountData: DeleteAccount.Params): Promise<DeleteAccount.Result> {
    const exists = await this.checkAccountByEmailRepository.checkByEmail(accountData.email)
    let isValid = false
    if (exists) {
      isValid = await this.deleteAccountRepository.deleteByEmail(accountData)
    }
    return isValid
  }
}
