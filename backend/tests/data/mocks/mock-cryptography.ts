import { Hasher, HashVerify, Encrypter, Decrypter } from '@/data/protocols'

import faker from 'faker'

export class HasherSpy implements Hasher {
  plaintext: string

  async hash (plaintext: string): Promise<string> {
    return this.plaintext = plaintext
  }
}

export class HashVerifySpy implements HashVerify {
  plaintext: string
  hash: string
  isValid = true

  async verify(plaintext: string, hash: string): Promise<boolean> {
    this.plaintext = plaintext
    this.hash = hash
    return this.isValid
  }
}

export class EncrypterSpy implements Encrypter {
  ciphertext = faker.random.uuid()
  plaintext: string

  async encrypt (plaintext: string): Promise<string> {
    this.plaintext = plaintext
    return this.ciphertext
  }
}

export class DecrypterSpy implements Decrypter {
  plaintext = faker.internet.password()
  ciphertext: string

  async decrypt (ciphertext: string): Promise<string> {
    this.ciphertext = ciphertext
    return this.plaintext
  }
}
