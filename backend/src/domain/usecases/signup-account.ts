import { AccountModel } from '@/domain/entities'

export interface SignUpAccount {
  signup: (account: SignUpAccount.Data) => Promise<SignUpAccount.Result>
}

export namespace SignUpAccount {
  export type Data = AccountModel
  export type Result = Pick<AccountModel, "email">
}