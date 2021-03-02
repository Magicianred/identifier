import { AccountModel } from "@/domain/entities"

export interface DeleteAccount {
  delete: (accountData: DeleteAccount.Params) => Promise<DeleteAccount.Result>
}

export namespace DeleteAccount {
  export type Params = Pick<AccountModel, "email">
  export type Result = boolean
}
