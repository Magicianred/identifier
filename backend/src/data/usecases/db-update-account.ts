import { UpdateAccount } from '@/domain/usecases'
import { UpdateAccountRepository, CheckAccountByEmailRepository, Hasher } from '@/data/protocols'

export class DbUpdateAccount implements UpdateAccount {
  constructor(
    private readonly hasher: Hasher,
    private readonly updateAccountRepository: UpdateAccountRepository,
    private readonly checkAccountByEmailRepository: CheckAccountByEmailRepository
  ) { }

  async update(updateAccount: UpdateAccount.Params): Promise<UpdateAccount.Result> {
    const exists = await this.checkAccountByEmailRepository.checkByEmail(updateAccount.currentEmail)
    let isValid
    if (exists) {
      const hashedPassword = await this.hasher.hash(updateAccount.newPassword)
      isValid = await this.updateAccountRepository.updateByEmail({
        currentEmail: updateAccount.currentEmail,
        newEmail: updateAccount.newEmail,
        newPassword: hashedPassword
      })
    }
    return isValid
  }
}
