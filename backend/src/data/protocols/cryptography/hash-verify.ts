export interface HashVerify {
  verify: (plaitext: string, digest: string) => Promise<boolean>
}
