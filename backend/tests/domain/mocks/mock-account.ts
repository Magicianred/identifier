import { SignUpAccount, Authentication } from '@/domain/usecases'

import faker from 'faker'

export const mockSignUpAccountData = (): SignUpAccount.Data => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAuthenticationParams = (): Authentication.Params => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})
