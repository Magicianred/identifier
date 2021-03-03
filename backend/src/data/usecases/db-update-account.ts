import { UpdateAccount } from '@/domain/usecases'
import { UpdateAccountRepository, CheckAccountByEmailRepository } from '@/data/protocols'

export class DbUpdateAccount implements UpdateAccount {
  constructor(
    private readonly updateAccountRepository: UpdateAccountRepository,
    private readonly checkAccountByEmailRepository: CheckAccountByEmailRepository
  ) { }

  async update(updateAccount: UpdateAccount.Params): Promise<UpdateAccount.Result> {
    const exists = await this.checkAccountByEmailRepository.checkByEmail(updateAccount.currentEmail)
    let isValid = false
    if (exists) {
      isValid = await this.updateAccountRepository.updateByEmail({
        currentEmail: updateAccount.currentEmail,
        newEmail: updateAccount.newEmail,
        newPassword: updateAccount.newPassword
      })
    }
    return isValid
  }
}
