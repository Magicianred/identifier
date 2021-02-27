import { SignUpAccount } from "@/domain/usecases";

export interface SignUpAccountRepository {
  signupAccount: (data: SignUpAccountRepository.Data) => Promise<SignUpAccountRepository.Result>
}

export namespace SignUpAccountRepository {
  export type Data = SignUpAccount.Data
  export type Result = boolean
}