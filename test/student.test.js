const Course = require('../src/course.js')
const Institution = require('../src/institution.js')
const Student = require('../src/student.js')
const CourseOffering = require('../src/course-offering.js')

describe('Student Test', () => {
  test('CreateStudent_WhenAllConditionsAreMet_ReturnsObject', () => {
    // Arrange
    const testInstitution = new Institution('Quinnipiac University', 'qu.edu')

    // Act
    const seniorStudent = new Student('Ryan', 'Dahl', testInstitution, '1/1/2024', 'rdahl')

    // Assert
    expect(seniorStudent).not.toBeNull()
  })

  test('GetGPA_WhenNoClasses_Returns0', () => {
    // Arrange
    const testInstitution = new Institution('Quinnipiac University', 'qu.edu')

    // Act
    const seniorStudent = new Student('Ryan', 'Dahl', testInstitution, '1/1/2024', 'rdahl')

    // Assert
    expect(seniorStudent.gpa).toBe(0)
  })
  test('GetCredits_WhenNoClasses_Returns0', () => {
    // Arrange
    const testInstitution = new Institution('Quinnipiac University', 'qu.edu')

    // Act
    const seniorStudent = new Student('Ryan', 'Dahl', testInstitution, '1/1/2024', 'rdahl')

    // Assert
    expect(seniorStudent.credits).toBe(0)
  })
  test('GetCredits_When1Class_ReturnsCreditOfClass', () => {
    // Arrange
    const testInstitution = new Institution('Quinnipiac University', 'qu.edu')
    const softwareQualityAssuranceCourse = new Course('Software Engineering', 'SER330', 'Software Quality Assurance', 3)
    testInstitution.add_course(softwareQualityAssuranceCourse)
    const seniorStudent = new Student('Ryan', 'Dahl', testInstitution, '1/1/2024', 'rdahl')
    const softwareQualityAssuranceFallCourseOffering = new CourseOffering(softwareQualityAssuranceCourse, '01', '2024', '1')
    testInstitution.enroll_student(seniorStudent)
    testInstitution.add_course_offering(softwareQualityAssuranceFallCourseOffering)
    testInstitution.register_student_for_course(seniorStudent, 'Software Quality Assurance', 'Software Engineering', 'SER330', '01', '2024', '1')

    // Act
    softwareQualityAssuranceFallCourseOffering.register_students(seniorStudent)
    // Assert
    expect(seniorStudent.credits).toBe(3)
  })
  test('StudentToString_WhenAllConditionsAreMet_ReturnsString', () => {
    // Arrange
    const testInstitution = new Institution('Quinnipiac University', 'qu.edu')
    const seniorStudent = new Student('Ryan', 'Dahl', testInstitution, '1/1/2024', 'rdahl')

    // Act
    const studentString = seniorStudent.toString
    // Assert
    expect(studentString).not.toBeNull()
  })
  test('StudentListCourses_WhenAllConditionsAreMet_ReturnsObject', () => {
    // Arrange
    const testInstitution = new Institution('Quinnipiac University', 'qu.edu')
    const seniorStudent = new Student('Ryan', 'Dahl', testInstitution, '1/1/2024', 'rdahl')
    const softwareQualityAssuranceCourse = new Course('Software Engineering', 'SER330', 'Software Quality Assurance', 3)
    testInstitution.add_course(softwareQualityAssuranceCourse)
    const softwareQualityAssuranceFallCourseOffering = new CourseOffering(softwareQualityAssuranceCourse, '01', '2024', '1')
    testInstitution.enroll_student(seniorStudent)
    testInstitution.add_course_offering(softwareQualityAssuranceFallCourseOffering)
    testInstitution.register_student_for_course(seniorStudent, 'Software Quality Assurance', 'Software Engineering', 'SER330', '01', '2024', '1')

    // Act
    const studentCourses = seniorStudent.list_courses()
    console.log(studentCourses)
    // Assert
    expect(studentCourses).not.toBeNull()
  })
})
