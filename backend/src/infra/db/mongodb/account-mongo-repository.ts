import { MongoHelper } from '@/infra/db'
import { SignUpAccountRepository, CheckAccountByEmailRepository } from '@/data/protocols/db'

export class AccountMongoRepository implements SignUpAccountRepository, CheckAccountByEmailRepository {
  async signupAccount(data: SignUpAccountRepository.Data): Promise<SignUpAccountRepository.Result> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(data)
    // return result.ops[0] !== null
    return result.ops[0]
  }

  async checkByEmail(email: string): Promise<CheckAccountByEmailRepository.Result> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const account = await accountCollection.findOne({
      email
    })
    return account !== null
  }
}
