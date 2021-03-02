export interface UpdateAccessTokenRepository {
  updateAccessToken: (id: string, email: string) => Promise<void>
}
