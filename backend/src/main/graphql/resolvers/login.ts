import { adaptResolver } from '@/main/adapters'
import {
  makeLoginController, makeSignUpController, makeDeleteController,
  // makeUpdateController
} from '@/main/factories'

export default {
  Query: {
    login: async (parent: any, args: any) => adaptResolver(makeLoginController(), args)
  },

  Mutation: {
    signUp: async (parent: any, args: any) => adaptResolver(makeSignUpController(), args),
    delete: async (parent: any, args: any, context: any) => adaptResolver(makeDeleteController(), args),
    // update: async (parent: any, args: any, context: any) => adaptResolver(makeUpdateController(), args)
  }
}
