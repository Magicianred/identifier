import { AccountModel } from "@/domain/entities"

export interface AllAccount {
  all: () => Promise<AllAccount.Result>
}

export namespace AllAccount {
  export type Result = AccountModel[]
}
