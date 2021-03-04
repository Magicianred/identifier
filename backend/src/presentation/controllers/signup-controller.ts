import { Controller, HttpResponse } from '@/presentation/protocols'
import { serverError, ok, forbidden } from '@/presentation/helpers'
import { EmailInUseError, InvalidParamError } from '@/presentation/errors'
import { SignUpAccount } from '@/domain/usecases'

export class SignUpController implements Controller {
  constructor(
    private readonly signUpAccount: SignUpAccount
  ) { }

  async handle(request: SignUpController.Request): Promise<HttpResponse> {
    try {
      const { email, password, passwordConfirmation } = request
      if (password !== passwordConfirmation) {
        return forbidden(new InvalidParamError(password || passwordConfirmation))
      }
      const isValid = await this.signUpAccount.signup({
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

export namespace SignUpController {
  export type Request = {
    email: string
    password: string
    passwordConfirmation: string
  }
}
