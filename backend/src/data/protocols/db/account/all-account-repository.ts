import { AccountModel } from "@/domain";

export interface AllAccountRepository {
  loadAll: () => Promise<AllAccountRepository.Result>
}

export namespace AllAccountRepository {
  export type Result = AccountModel[]
}
