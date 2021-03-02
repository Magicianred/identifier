import { makeDbAuthentication, makeDbUpdateAccount } from '@/main/factories'
import { UpdateController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'

export const makeUpdateController = (): Controller => {
  return new UpdateController(makeDbUpdateAccount(), makeDbAuthentication())
  
}