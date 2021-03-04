import { DeleteAccount } from '@/domain/usecases'

export interface DeleteAccountRepository {
  deleteByEmail: (data: DeleteAccountRepository.Params) => Promise<void>
}

export namespace DeleteAccountRepository {
  export type Params = DeleteAccount.Params
}
