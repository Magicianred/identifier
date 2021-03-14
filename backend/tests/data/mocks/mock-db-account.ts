import { SignUpAccountRepository, LoadAccountByEmailRepository, LoadAccountByTokenRepository, UpdateAccessTokenRepository, CheckAccountByEmailRepository } from '@/data/protocols'

import faker from 'faker'

export class SignUpAccountRepositorySpy implements SignUpAccountRepository {
  data: SignUpAccountRepository.Data
  result: Pick<SignUpAccountRepository.Data, "email">

  async signupAccount(data: SignUpAccountRepository.Data): Promise<SignUpAccountRepository.Result> {
    this.data = data
    return this.result
  }
}

export class LoadAccountByEmailRepositorySpy implements LoadAccountByEmailRepository {
  email: string
  result = {
    id: faker.random.uuid(),
    email: faker.internet.email(),
    password: faker.internet.password()
  }

  async loadByEmail (email: string): Promise<LoadAccountByEmailRepository.Result> {
    this.email = email
    return this.result
  }
}

export class CheckAccountByEmailRepositorySpy implements CheckAccountByEmailRepository {
  email: string
  result = false

  async checkByEmail (email: string): Promise<CheckAccountByEmailRepository.Result> {
    this.email = email
    return this.result
  }
}

export class LoadAccountByTokenRepositorySpy implements LoadAccountByTokenRepository {
  token: string
  role: string
  result = {
    email: faker.internet.email()
  }

  async loadByToken (token: string, role?: string): Promise<LoadAccountByTokenRepository.Result> {
    this.token = token
    this.role = role
    return this.result
  }
}

export class UpdateAccessTokenRepositorySpy implements UpdateAccessTokenRepository {
  email: string
  token: string

  async updateAccessToken (email: string, token: string): Promise<void> {
    this.email = email
    this.token = token
  }
}
