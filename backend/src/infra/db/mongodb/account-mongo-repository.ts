import { MongoHelper } from '@/infra/db'
import { SignUpAccountRepository, CheckAccountByEmailRepository, LoadAccountByEmailRepository, UpdateAccessTokenRepository, DeleteAccountRepository, UpdateAccountRepository, AllAccountRepository } from '@/data/protocols/db'

export class AccountMongoRepository implements SignUpAccountRepository, LoadAccountByEmailRepository, CheckAccountByEmailRepository, UpdateAccessTokenRepository, DeleteAccountRepository, UpdateAccountRepository, AllAccountRepository {
  async signupAccount(data: SignUpAccountRepository.Data): Promise<SignUpAccountRepository.Result> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(data)
    // console.log("result.ops[0]: ", result.ops[0])
    // console.log("MongoHelper.map(result.ops[0]): ", MongoHelper.map(result.ops[0]))
    return result && MongoHelper.map(result.ops[0])
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
    // console.log("account: ", account)
    // console.log("MongoHelper.map(account): ", MongoHelper.map(account))
    return account && MongoHelper.map(account)
  }

  async checkByEmail(email: string): Promise<CheckAccountByEmailRepository.Result> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const account = await accountCollection.findOne({
      email
    })
    // console.log("account: ", account)
    // console.log("MongoHelper.map(account): ", MongoHelper.map(account))
    return account !== null
  }

  async updateAccessToken(id: string, token: string): Promise<void> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    // await accountCollection.updateOne({
    const account = await accountCollection.updateOne({
      _id: id
    }, {
      $set: {
        accessToken: token
      }
    })
    // console.log("account: ", account)
    // console.log("MongoHelper.map(account): ", MongoHelper.map(account))
  }

  async deleteByEmail(data: DeleteAccountRepository.Params): Promise<void> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteOne(data)
    // console.log("account: ", account)
    // console.log("MongoHelper.map(account): ", MongoHelper.map(account))
  }

  async updateByEmail(data: UpdateAccountRepository.Params): Promise<UpdateAccountRepository.Result> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const account = await accountCollection.updateOne({
      email: data.currentEmail
    }, {
      $set: {
        email: data.newEmail,
        password: data.newPassword
      }
    })
    // console.log("account: ", account.ops[0])
    // console.log("MongoHelper.map(account): ", MongoHelper.map(account.ops[0]))
    return account.ops[0]
  } 

  async all(): Promise<AllAccountRepository.Result> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const account = await accountCollection.find()
    // console.log("account: ", account.ops[0])
    // console.log("MongoHelper.map(account): ", MongoHelper.map(account.ops[0]))
    return account.ops[0]
  } 
}
