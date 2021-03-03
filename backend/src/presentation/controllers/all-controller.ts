import { Controller, HttpResponse } from '@/presentation/protocols'
import { serverError, ok, forbidden } from '@/presentation/helpers'
import { EmailInUseError } from '@/presentation/errors'
import { AllAccount } from '@/domain/usecases'

export class AllController implements Controller {
  constructor(
    private readonly allAccount: AllAccount,
  ) { }

  async handle(): Promise<HttpResponse> {
    try {
      const isValid = await this.allAccount.all()
      if (!isValid) {
        return forbidden(new EmailInUseError())
      }
      return ok(isValid)
    } catch (error) {
      return serverError(error)
    }
  }
}

// export namespace AllController {
//   export type Request = {
//     currentEmail: string
//     newEmail: string
//     newPassword: string
//   }
// }
