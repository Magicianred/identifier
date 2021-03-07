import { Authentication } from '@/domain/usecases'
import { HashVerify, Encrypter, LoadAccountByEmailRepository, UpdateAccessTokenRepository } from '@/data/protocols'

export class DbAuthentication implements Authentication {
  constructor (
    private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository,
    private readonly hashVerify: HashVerify,
    private readonly encrypter: Encrypter,
    private readonly updateAccessTokenRepository: UpdateAccessTokenRepository,
  ) {}

  async auth (authenticationParams: Authentication.Params): Promise<Authentication.Result> {
    const account = await this.loadAccountByEmailRepository.loadByEmail(authenticationParams.email)
    if (account) {
      const isValid = await this.hashVerify.verify(authenticationParams.password, account.password)
      if (isValid) {
        const accessToken = await this.encrypter.encrypt(account.email)
        await this.updateAccessTokenRepository.updateAccessToken(account.email, accessToken)
        return {
          accessToken,
          email: account.email
        }
      }
    }
    return null
  }
}
