const PasswordManager = require('../src/examples/password-verification.js')

describe('Password Verification Test', () => {
  test('VerifyPassword_WhenCredentialsAreValid_ReturnsTrue', () => {
    // Arrange
    const passwordManager = new PasswordManager()
    const userName = 'TestUser'
    const password = 'Password'
    // Act
    const result = passwordManager.verifyPassword(userName, password)
    // Assert
    expect(result).toBe(true)
  })
})
