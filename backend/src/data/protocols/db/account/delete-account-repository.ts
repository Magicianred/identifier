import { DeleteAccount } from '@/domain/usecases'

export interface DeleteAccountRepository {
  deleteByEmail: (data: DeleteAccountRepository.Params) => Promise<DeleteAccountRepository.Result>
}

export namespace DeleteAccountRepository {
  export type Params = DeleteAccount.Params
  export type Result = boolean
}
