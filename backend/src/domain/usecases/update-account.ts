import { AccountModel } from "@/domain/entities"

export interface UpdateAccount {
  update: (updateAccount: UpdateAccount.Params) => Promise<UpdateAccount.Result>
}

export namespace UpdateAccount {
  export type Params = {
    currentEmail: string
    newEmail: string
    newPassword: string
  }
  export type Result = boolean
}
