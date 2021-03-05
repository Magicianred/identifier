import { AccountModel } from "@/domain/entities"

export interface LoadAccount {
  load: (email: string) => Promise<LoadAccount.Result>
}

export namespace LoadAccount {
  export type Result = AccountModel
}
