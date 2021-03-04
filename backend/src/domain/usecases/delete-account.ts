import { AccountModel } from "@/domain/entities"

export interface DeleteAccount {
  delete: (accountData: DeleteAccount.Params) => Promise<void>
}

export namespace DeleteAccount {
  export type Params = Pick<AccountModel, "email">
}
