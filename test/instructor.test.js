const Course = require('../src/course.js')
const Institution = require('../src/institution.js')
const Instructor = require('../src/instructor.js')
const Student = require('../src/student.js')
const CourseOffering = require('../src/course-offering.js')

describe('Instructor Test', () => {
  test('CreateInstructor_WhenAllConditionsAreMet_ReturnsObject', () => {
    // Arrange
    const testInstitution = new Institution('Quinnipiac University', 'qu.edu')

    // Act
    const sqaInstructor = new Instructor('Nicolini', 'Dylan', testInstitution, '1/1/2024', 'dnicolini')
    // Assert
    expect(sqaInstructor).not.toBeNull()
  })
  test('AssignInstructor_WhenAllConditionsAreMet', () => {
    // Arrange
    const testInstitution = new Institution('Quinnipiac University', 'qu.edu')
    const sqaInstructor = new Instructor('Nicolini', 'Dylan', testInstitution, '1/1/2024', 'dnicolini')
    const softwareQualityAssuranceCourse = new Course('Software Engineering', 'SER330', 'Software Quality Assurance', 3)
    testInstitution.hire_instructor(sqaInstructor)

    // Act
    testInstitution.assign_instructor(sqaInstructor, softwareQualityAssuranceCourse)
    const assignedInstructor = sqaInstructor.course_list

    // Assert
    expect(assignedInstructor).not.toBeNull()
  })
  test('AssignInstructor_WhenAllConditionsAreMet', () => {
    // Arrange
    const testInstitution = new Institution('Quinnipiac University', 'qu.edu')
    const sqaInstructor = new Instructor('Nicolini', 'Dylan', testInstitution, '1/1/2024', 'dnicolini')
    const softwareQualityAssuranceCourse = new Course('Software Engineering', 'SER330', 'Software Quality Assurance', 3)
    testInstitution.hire_instructor(sqaInstructor)

    // Act
    testInstitution.assign_instructor(sqaInstructor, softwareQualityAssuranceCourse)
    const assignedInstructor = sqaInstructor.course_list

    // Assert
    expect(assignedInstructor).not.toBeNull()
  })
  test('ListCourses_WhenYearAndQuarterProvided', () => {
    // Arrange
    const testInstitution = new Institution('Quinnipiac University', 'qu.edu')
    const sqaInstructor = new Instructor('Nicolini', 'Dylan', testInstitution, '1/1/2024', 'dnicolini')
    const softwareQualityAssuranceCourse = new Course('Software Engineering', 'SER330', 'Software Quality Assurance', 3)
    testInstitution.hire_instructor(sqaInstructor)

    // Act
    const assignedInstructor = sqaInstructor.list_courses(2024, 2)

    // Assert
    expect(assignedInstructor).not.toBeNull()
  })
  test('ListCourses_WhenYearAndNoQuarterProvided', () => {
    // Arrange
    const testInstitution = new Institution('Quinnipiac University', 'qu.edu')
    const sqaInstructor = new Instructor('Nicolini', 'Dylan', testInstitution, '1/1/2024', 'dnicolini')
    const softwareQualityAssuranceCourse = new Course('Software Engineering', 'SER330', 'Software Quality Assurance', 3)
    testInstitution.hire_instructor(sqaInstructor)

    // Act
    const assignedInstructor = sqaInstructor.list_courses(2024)

    // Assert
    expect(assignedInstructor).not.toBeNull()
  })
  test('ListCourses_WhenNoYearAndQuarterProvided', () => {
    // Arrange
    const testInstitution = new Institution('Quinnipiac University', 'qu.edu')
    const sqaInstructor = new Instructor('Nicolini', 'Dylan', testInstitution, '1/1/2024', 'dnicolini')
    const softwareQualityAssuranceCourse = new Course('Software Engineering', 'SER330', 'Software Quality Assurance', 3)
    testInstitution.hire_instructor(sqaInstructor)

    // Act
    const assignedInstructor = sqaInstructor.list_courses(null, 2)

    // Assert
    expect(assignedInstructor).not.toBeNull()
  })
})
