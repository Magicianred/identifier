import { MongoHelper } from '@/infra/db'
import { SignUpAccountRepository, CheckAccountByEmailRepository, LoadAccountByEmailRepository, UpdateAccessTokenRepository, DeleteAccountRepository, UpdateAccountRepository, AllAccountRepository, LoadAccountRepository, LoadAccountByTokenRepository } from '@/data/protocols/db'

export class AccountMongoRepository implements SignUpAccountRepository, LoadAccountByEmailRepository, CheckAccountByEmailRepository, UpdateAccessTokenRepository, DeleteAccountRepository, UpdateAccountRepository, AllAccountRepository, LoadAccountRepository, LoadAccountByTokenRepository {
  async signupAccount(data: SignUpAccountRepository.Data): Promise<SignUpAccountRepository.Result> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(data)
    return result && MongoHelper.map(result.ops[0])
  }

  async loadByEmail(email: string): Promise<LoadAccountByEmailRepository.Result> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const account = await accountCollection.findOne({
      email
    }, {
      projection: {
        _id: 1,
        // name: 1,
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

  async updateAccessToken(email: string, token: string): Promise<void> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.updateOne({
      email: email
    }, {
      $set: {
        accessToken: token
      }
    })
  }

  async deleteByEmail(data: DeleteAccountRepository.Params): Promise<void> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteOne(data)
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
    return account.ops[0]
  } 

  async loadAll(): Promise<AllAccountRepository.Result> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const accounts = await accountCollection.find(
    ).toArray()
    return MongoHelper.mapCollection(accounts)
  }

  async loadByData(email: string): Promise<LoadAccountByEmailRepository.Result> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const account = await accountCollection.findOne({
      email
    })
    return account && MongoHelper.map(account)
  }

  async loadByToken(token: string, role?: string): Promise<LoadAccountByTokenRepository.Result> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const account = await accountCollection.findOne({
      accessToken: token,
      $or: [{
        role
      }, {
        role: 'admin'
      }]
    }, {
      projection: {
        email: 1
      }
    })
    return account && MongoHelper.map(account)
  }
}
