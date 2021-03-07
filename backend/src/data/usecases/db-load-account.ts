import { LoadAccount } from '@/domain/usecases'
import { LoadAccountRepository } from '@/data/protocols'

export class DbLoadAccount implements LoadAccount {
  constructor(private readonly loadAccountRepository: LoadAccountRepository) {}

  async load(email: string): Promise<LoadAccount.Result> {
    const account = await this.loadAccountRepository.loadByData(email)
    if (account) {
      return account
    }
    return null
  }
}
