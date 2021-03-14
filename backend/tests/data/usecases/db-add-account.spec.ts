import { DbSignUpAccount } from '@/data/usecases'
import { mockSignUpAccountData, throwError } from '@/tests/domain/mocks'
import { HasherSpy, SignUpAccountRepositorySpy, CheckAccountByEmailRepositorySpy } from '@/tests/data/mocks'

type SutTypes = {
  sut: DbSignUpAccount
  hasherSpy: HasherSpy
  signUpAccountRepositorySpy: SignUpAccountRepositorySpy
  checkAccountByEmailRepositorySpy: CheckAccountByEmailRepositorySpy
}

const makeSut = (): SutTypes => {
  const checkAccountByEmailRepositorySpy = new CheckAccountByEmailRepositorySpy()
  const hasherSpy = new HasherSpy()
  const signUpAccountRepositorySpy = new SignUpAccountRepositorySpy()
  const sut = new DbSignUpAccount(hasherSpy, signUpAccountRepositorySpy, checkAccountByEmailRepositorySpy)
  return {
    sut,
    hasherSpy,
    signUpAccountRepositorySpy,
    checkAccountByEmailRepositorySpy
  }
}

describe('DbAddAccount Usecase', () => {
  test('Should call Hasher with correct plaintext', async () => {
    const { sut, hasherSpy } = makeSut()
    const signUpAccountData = mockSignUpAccountData()
    await sut.signup(signUpAccountData)
    expect(hasherSpy.plaintext).toBe(signUpAccountData.password)
  })

  test('Should throw if Hasher throws', async () => {
    const { sut, hasherSpy } = makeSut()
    jest.spyOn(hasherSpy, 'hash').mockImplementationOnce(throwError)
    const promise = sut.signup(mockSignUpAccountData())
    await expect(promise).rejects.toThrow()
  })

  test('Should call AddAccountRepository with correct values', async () => {
    const { sut, signUpAccountRepositorySpy, hasherSpy } = makeSut()
    const addAccountParams = mockSignUpAccountData()
    await sut.signup(addAccountParams)
    expect(signUpAccountRepositorySpy.data).toEqual({
      email: addAccountParams.email,
      password: hasherSpy.plaintext
    })
  })

  test('Should throw if AddAccountRepository throws', async () => {
    const { sut, signUpAccountRepositorySpy } = makeSut()
    jest.spyOn(signUpAccountRepositorySpy, 'signupAccount').mockImplementationOnce(throwError)
    const promise = sut.signup(mockSignUpAccountData())
    await expect(promise).rejects.toThrow()
  })

  test('Should return false if CheckAccountByEmailRepository returns true', async () => {
    const { sut, checkAccountByEmailRepositorySpy } = makeSut()
    checkAccountByEmailRepositorySpy.result = true
    const isValid = await sut.signup(mockSignUpAccountData())
    expect(isValid).toBe(true)
  })

  test('Should call LoadAccountByEmailRepository with correct email', async () => {
    const { sut, checkAccountByEmailRepositorySpy } = makeSut()
    const signUpAccountData = mockSignUpAccountData()
    await sut.signup(signUpAccountData)
    expect(checkAccountByEmailRepositorySpy.email).toBe(signUpAccountData.email)
  })
})
