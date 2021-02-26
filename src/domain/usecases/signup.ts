import { AccountModel } from '@/domain/entity'

export interface SignUpAccount {
  signup: (account: SignUpAccount.Data) => Promise<SignUpAccount.Result>
}

export namespace SignUpAccount {
  export type Data = AccountModel
  export type Result = boolean
}