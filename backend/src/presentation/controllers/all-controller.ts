import { Controller, HttpResponse } from '@/presentation/protocols'
import { serverError, ok, noContent } from '@/presentation/helpers'
import { AllAccount } from '@/domain/usecases'

export class AllController implements Controller {
  constructor(
    private readonly allAccount: AllAccount) {}

  async handle(): Promise<HttpResponse> {
    try {
      const accounts = await this.allAccount.all()
      return accounts.length ? ok(accounts) : noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}