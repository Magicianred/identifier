import { makeDbAllAccount } from '@/main/factories'
import { AllController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'

export const makeAllController = (): Controller => {
  return new AllController(makeDbAllAccount())
}