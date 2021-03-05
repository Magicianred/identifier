import { Controller, HttpResponse } from '@/presentation/protocols'
import { serverError, ok, noContent } from '@/presentation/helpers'
import { LoadAccount } from '@/domain/usecases'

export class LoadController implements Controller {
  constructor(
    private readonly loadAccount: LoadAccount) {}

  async handle(request: LoadController.Data): Promise<HttpResponse> {
    try {
      const account = await this.loadAccount.load(request.email)
      return account ? ok(account) : noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace LoadController {
  export type Data = {
    email: string
  }
}