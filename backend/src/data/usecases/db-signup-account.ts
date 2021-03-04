import { SignUpAccount } from "@/domain/usecases";
import { Hasher, SignUpAccountRepository, CheckAccountByEmailRepository } from '@/data/protocols'

export class DbSignUpAccount implements SignUpAccount {
  constructor(
    private readonly hasher: Hasher,
    private readonly signUpAccountRepository: SignUpAccountRepository,
    private readonly checkAccountByEmailRepository: CheckAccountByEmailRepository
  ) { }

  async signup(account: SignUpAccount.Data): Promise<SignUpAccount.Result> {
    const exist = await this.checkAccountByEmailRepository.checkByEmail(account.email)
    let isValid
    if (!exist) {
      const hashedPassword = await this.hasher.hash(account.password)
      isValid = await this.signUpAccountRepository.signupAccount({ ...account, password: hashedPassword })
    }
    return isValid
  }
}