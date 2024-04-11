const Course = require('../src/course.js')
const Institution = require('../src/institution.js')
const Student = require('../src/student.js')
const CourseOffering = require('../src/course-offering.js')

describe('Course Offering Test', () => {
  test('CreateCourseOffering_WhenAllConditionsAreMet_ReturnsObject', () => {
    // Arrange
    const softwareQualityAssuranceCourse = new Course('Software Engineering', 'SER330', 'Software Quality Assurance', 3)

    // Act
    const softwareQualityAssuranceFallCourseOffering = new CourseOffering(softwareQualityAssuranceCourse, '01', '2024', '1')

    // Assert
    expect(softwareQualityAssuranceFallCourseOffering).not.toBeNull()
  })

  test('SubmitGrade_WhenAllConditionsAreMet_AddsGrade', () => {
    // Arrange
    const softwareQualityAssuranceCourse = new Course('Software Engineering', 'SER330', 'Software Quality Assurance', 3)
    const softwareQualityAssuranceFallCourseOffering = new CourseOffering(softwareQualityAssuranceCourse, '01', '2024', '1')
    const testInstitution = new Institution('Quinnipiac University', 'qu.edu')
    const seniorStudent = new Student('Ryan', 'Dahl', testInstitution, '1/1/2024', 'rdahl')
    testInstitution.add_course_offering(softwareQualityAssuranceFallCourseOffering)
    // testInstitution.register_student_for_course(seniorStudent, 'Software Quality Assurance', 'Software Engineering', 'SER330', '01', '2024', '1')

    // Act
    softwareQualityAssuranceFallCourseOffering.submit_grade(seniorStudent, 'A')
    const grade = softwareQualityAssuranceFallCourseOffering.get_grade(seniorStudent)

    // Assert
    expect(grade).toBe('A')
  })

  test('RegisterStudentToOffering_WhenAllConditionsAreMet_AddsStudent', () => {
    // Arrange
    const softwareQualityAssuranceCourse = new Course('Software Engineering', 'SER330', 'Software Quality Assurance', 3)
    const softwareQualityAssuranceFallCourseOffering = new CourseOffering(softwareQualityAssuranceCourse, '01', '2024', '1')
    const testInstitution = new Institution('Quinnipiac University', 'qu.edu')
    const seniorStudent = new Student('Ryan', 'Dahl', testInstitution, '1/1/2024', 'rdahl')

    // Act
    softwareQualityAssuranceFallCourseOffering.register_students(seniorStudent)
    const RegisteredStudents = softwareQualityAssuranceFallCourseOffering.registered_students

    // Assert
    expect(RegisteredStudents).not.toBeNull()
  })
})
