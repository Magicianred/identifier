import { adaptResolver } from '@/main/adapters'
import { makeLoginController, makeSignUpController, makeDeleteController, makeUpdateController, makeAllController } from '@/main/factories'

export default {
  Query: {
    login: async (parent: any, args: any) => adaptResolver(makeLoginController(), args),
    all: async (parent: any, args: any) => adaptResolver(makeAllController(), args)
  },

  Mutation: {
    signUp: async (parent: any, args: any) => adaptResolver(makeSignUpController(), args),
    delete: async (parent: any, args: any) => adaptResolver(makeDeleteController(), args),
    update: async (parent: any, args: any) => adaptResolver(makeUpdateController(), args)
  }
}
