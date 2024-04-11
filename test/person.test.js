const Person = require('../src/person.js')
const Institution = require('../src/institution.js')

describe('Person Test Cases', () => {
  test('GivenNewPerson_WhenAllConditionsMet_ThenCreatesPerson', () => {
    // Given
    // My assumptions
    const testInstitution = new Institution('Quinnipiac University', 'qu.edu')

    // When
    // The actions necessary to complet the test case
    // Create and validate a Person
    const testPerson = new Person('lastName', 'firstName', 'test school', '1/1/2024', 'student_username', 'affiliation')

    // Then
    // Conditions verifying
    expect(testPerson).not.toBeNull()
  })
  test('GivenPerson_When_AllConditionsMet_ThenToStringReturnsInfo', () => {
    // Given
    // My assumptions
    // const testInstitution = new Institution('Quinnipiac University', 'qu.edu')
    const testPerson = new Person('lastName', 'firstName', 'test school', '1/1/2024', 'student_username', 'affiliation')

    // When
    const PersonInfo = testPerson.toString

    // Then
    // Conditions verifying
    expect(PersonInfo).not.toBeNull()
  })
  test('GivenPerson_When_AllConditionsMet_ThenEmailReturnsString', () => {
    // Given
    // My assumptions
    // const testInstitution = new Institution('Quinnipiac University', 'qu.edu')
    const testPerson = new Person('lastName', 'firstName', 'test school', '1/1/2024', 'student_username', 'affiliation')

    // When
    const PersonEmail = testPerson.email

    // Then
    // Conditions verifying
    expect(PersonEmail).not.toBeNull()
  })
})
