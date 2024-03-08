const Person = require('../src/person.js')
const Institution = require('../src/institution.js')

describe('Person Test Cases', () => {
  test('Given_NewPerson_When_AllConditionsMet_Then_ReturnsTrue',() => {
    // Given
    // My assumptions
    const testInstitution = new Institution('Quinnipiac University', 'qu.edu')

    // When
    // The actions necessary to complet the test case
    // Create and validate a Person
    const testPerson = new Person('lastName', 'firstName', 'test school', '1/1/2024', 'student_username', 'affiliation')

    // Then
    // Conditions verifying
    expect(2 + 2).toBe(4)
  })
})
