import { Controller, HttpResponse } from '@/presentation/protocols'
import { serverError, ok, forbidden } from '@/presentation/helpers'
import { EmailInUseError } from '@/presentation/errors'
import { UpdateAccount } from '@/domain/usecases'

export class UpdateController implements Controller {
  constructor(
    private readonly updateAccount: UpdateAccount,
  ) { }

  async handle(request: UpdateController.Request): Promise<HttpResponse> {
    try {
      const { email, password } = request
      const isValid = await this.updateAccount.update({
        email,
        password
      })
      if (!isValid) {
        return forbidden(new EmailInUseError())
      }
      return ok(isValid)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace UpdateController {
  export type Request = {
    name: string
    email: string
    password: string
  }
}
