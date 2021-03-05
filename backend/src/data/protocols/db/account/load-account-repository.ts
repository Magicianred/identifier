import { AccountModel } from "@/domain";

export interface LoadAccountRepository {
  loadByData: (email: string) => Promise<LoadAccountRepository.Result>
}

export namespace LoadAccountRepository {
  export type Result = AccountModel
}
