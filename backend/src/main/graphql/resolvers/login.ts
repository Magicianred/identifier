import { adaptResolver } from '@/main/adapters'
import { makeLoginController, makeSignUpController, makeDeleteController, makeUpdateController, makeAllController, makeLoadController } from '@/main/factories'

export default {
  Query: {
    login: async (parent: any, args: any) => adaptResolver(makeLoginController(), args),
    load: async (parent: any, args: any, context: any) => adaptResolver(makeLoadController(), args, context),
    all: async (parent: any, args: any, context: any) => adaptResolver(makeAllController(), args, context)
  },

  Mutation: {
    signUp: async (parent: any, args: any) => adaptResolver(makeSignUpController(), args),
    delete: async (parent: any, args: any, context: any) => adaptResolver(makeDeleteController(), args, context),
    update: async (parent: any, args: any, context: any) => adaptResolver(makeUpdateController(), args, context)
  }
}
