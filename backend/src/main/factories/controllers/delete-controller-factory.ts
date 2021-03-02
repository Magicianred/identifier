import { makeDbDeleteAccount } from '@/main/factories'
import { DeleteController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'

export const makeDeleteController = (): Controller => {
  return new DeleteController(makeDbDeleteAccount())
}