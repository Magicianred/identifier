import { Hasher, HashVerify } from '@/data/protocols'

import * as argon2 from "argon2";

export class ArgonAdapter implements Hasher, HashVerify {
  async hash(plaintext: string): Promise<string> {
    return await argon2.hash(plaintext)
  }

  async verify(plaintext: string, digest: string): Promise<boolean> {
    return await argon2.verify(digest, plaintext)
  }
}
