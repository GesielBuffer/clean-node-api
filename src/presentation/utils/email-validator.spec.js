const EmailValidator = require('./email-validator')
const validator = require('validator')

const makesut = () => {
  return new EmailValidator()
}

describe('Email Validator', () => {
  test('should return true if validator returns true ', () => {
    const sut = makesut()
    const isEmailValid = sut.isValid('valid_email@mail.com')
    expect(isEmailValid).toBe(true)
  })

  test('should return false if validator returns false ', () => {
    validator.isEmailValid = false
    const sut = makesut()
    const isEmailValid = sut.isValid('invalid_email@mail.com')
    expect(isEmailValid).toBe(false)
  })

  test('should call validator with correct email ', () => {
    const sut = makesut()
    sut.isValid('any_email@mail.com')
    expect(validator.email).toBe('any_email@mail.com')
  })
})
