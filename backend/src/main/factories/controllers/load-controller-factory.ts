import { makeDbLoadAccount } from '@/main/factories'
import { LoadController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'

export const makeLoadController = (): Controller => {
  return new LoadController(makeDbLoadAccount())
}