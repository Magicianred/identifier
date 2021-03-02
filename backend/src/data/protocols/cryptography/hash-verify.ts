export interface HashVerify {
  verify: (hash: string, plaintext: string) => Promise<boolean>
}
