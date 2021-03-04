import { DeleteAccount } from '@/domain/usecases'
import { DeleteAccountRepository, CheckAccountByEmailRepository } from '@/data/protocols'

export class DbDeleteAccount implements DeleteAccount {
  constructor(
    private readonly deleteAccountRepository: DeleteAccountRepository,
    private readonly checkAccountByEmailRepository: CheckAccountByEmailRepository
  ) { }

  async delete(accountData: DeleteAccount.Params): Promise<void> {
    const exists = await this.checkAccountByEmailRepository.checkByEmail(accountData.email)
    if (exists) {
      await this.deleteAccountRepository.deleteByEmail(accountData)
    }
  }
}
