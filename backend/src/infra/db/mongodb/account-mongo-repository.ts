import { MongoHelper } from '@/infra/db'
import { SignUpAccountRepository, CheckAccountByEmailRepository, LoadAccountByEmailRepository, UpdateAccessTokenRepository, DeleteAccountRepository, UpdateAccountRepository, AllAccountRepository } from '@/data/protocols/db'

export class AccountMongoRepository implements SignUpAccountRepository, LoadAccountByEmailRepository, CheckAccountByEmailRepository, UpdateAccessTokenRepository, DeleteAccountRepository, UpdateAccountRepository, AllAccountRepository {
  async signupAccount(data: SignUpAccountRepository.Data): Promise<SignUpAccountRepository.Result> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(data)
    // return result.ops[0] !== null
    return result.ops[0]
  }

  async loadByEmail(email: string): Promise<LoadAccountByEmailRepository.Result> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const account = await accountCollection.findOne({
      email
    }, {
      projection: {
        _id: 1,
        name: 1,
        email: 1,
        password: 1
      }
    })
    return account && MongoHelper.map(account)
  }

  async checkByEmail(email: string): Promise<CheckAccountByEmailRepository.Result> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const account = await accountCollection.findOne({
      email
    })
    return account !== null
  }

  async updateAccessToken(id: string, token: string): Promise<void> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.updateOne({
      _id: id
    }, {
      $set: {
        accessToken: token
      }
    })
  }

  async deleteByEmail(data: DeleteAccountRepository.Params): Promise<DeleteAccountRepository.Result> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const account = await accountCollection.deleteOne(data)
    return account !== null
  }

  async updateByEmail(data: UpdateAccountRepository.Params): Promise<UpdateAccountRepository.Result> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const account = await accountCollection.findOneAndUpdate({
      email: data.currentEmail
    }, {
      $push: {
        email: data.newEmail,
        password: data.newPassword
      }
    }, { new: true })  
    // return account !== null
    return account.ops[0]
  } 

  async all(): Promise<AllAccountRepository.Result> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const account = await accountCollection.find()
    return account.ops[0]
  } 
}
