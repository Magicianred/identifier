import { AllAccount } from '@/domain/usecases'
import { AllAccountRepository } from '@/data/protocols'

export class DbAllAccount implements AllAccount {
  constructor (private readonly allAccountRepository: AllAccountRepository) {}

  async all (): Promise<AllAccount.Result> {
      return await this.allAccountRepository.loadAll()
    }
}
