export interface AllAccountRepository {
  all: () => Promise<AllAccountRepository.Result>
}

export namespace AllAccountRepository {
  export type Result = [{
    email: string
    password: string
  }]
}
