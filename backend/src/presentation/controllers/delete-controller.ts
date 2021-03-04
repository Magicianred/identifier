import { Controller, HttpResponse } from '@/presentation/protocols'
import { serverError, ok, forbidden } from '@/presentation/helpers'
import { EmailInUseError } from '@/presentation/errors'
import { DeleteAccount } from '@/domain/usecases'

export class DeleteController implements Controller {
  constructor(
    private readonly deleteAccount: DeleteAccount,
  ) { }

  async handle(request: DeleteController.Request): Promise<HttpResponse> {
    try {
      const { email } = request
      if (email) {
        await this.deleteAccount.delete({
          email
        })
      }
      return ok(email)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace DeleteController {
  export type Request = {
    email: string
  }
}
