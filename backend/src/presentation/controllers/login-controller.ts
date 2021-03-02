import { Controller, HttpResponse } from '@/presentation/protocols'
import { serverError, unauthorized, ok } from '@/presentation/helpers'
import { Authentication } from '@/domain/usecases'

export class LoginController implements Controller {
  constructor (
    private readonly authentication: Authentication,
  ) { }

  async handle (request: LoginController.Request): Promise<HttpResponse> {
    try {
      const authenticationModel = await this.authentication.auth(request)
      if (!authenticationModel) {
        return unauthorized()
      }
      return ok(authenticationModel)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace LoginController {
  export type Request = {
    email: string
    password: string
  }
}
