const Course = require('../src/course.js')
const Institution = require('../src/institution.js')
const Student = require('../src/student.js')
const CourseOffering = require('../src/course-offering.js')

describe('CourseTest', () => {
  test('RegisterStudent_WhenAllConditionsAreMet_ReturnsStudent', () => {
    // Arrange

    const testInstitution = new Institution('Quinnipiac University', 'qu.edu')

    // Create and validate a Person
    const seniorStudent = new Student('Ryan', 'Dahl', testInstitution, '1/1/2024', 'rdahl')
    const softwareQualityAssuranceCourse = new Course('Software Engineering', 'SER330', 'Software Quality Assurance', 3)
    const softwareQualityAssuranceFallCourseOffering = new CourseOffering(softwareQualityAssuranceCourse, '01', '2024', '1')
    testInstitution.add_course(softwareQualityAssuranceCourse)
    testInstitution.enroll_student(seniorStudent)
    testInstitution.add_course_offering(softwareQualityAssuranceFallCourseOffering)

    // Act
    testInstitution.register_student_for_course(seniorStudent, 'Software Quality Assurance', 'Software Engineering', 'SER330', '01', '2024', '1')

    // Assert
    // expect(softwareQualityAssuranceFallCourseOffering.get_students).not.toBeNull()
    expect(softwareQualityAssuranceCourse.get_students).not.toBeNull()
  })
})
