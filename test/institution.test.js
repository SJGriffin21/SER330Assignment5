const Course = require('../src/course.js')
const Institution = require('../src/institution.js')
const Student = require('../src/student.js')
const CourseOffering = require('../src/course-offering.js')

describe('Institution Test', () => {
  test('CreateInstitution_WhenAllConditionsAreMet_ReturnsObject', () => {
    // Arrange

    // Act
    const testInstitution = new Institution('Quinnipiac University', 'qu.edu')
    // Assert
    // expect(softwareQualityAssuranceFallCourseOffering.get_students).not.toBeNull()
    expect(testInstitution).not.toBeNull()
  })
  test('ListCourseCatalog_WhenAllConditionsAreMet_ReturnsCourse', () => {
    // Arrange
    const testInstitution = new Institution('Quinnipiac University', 'qu.edu')
    const softwareQualityAssuranceCourse = new Course('Software Engineering', 'SER330', 'Software Quality Assurance', 3)
    testInstitution.add_course(softwareQualityAssuranceCourse)
    // Act
    const catalog = testInstitution.list_course_catalog
    // Assert
    // expect(softwareQualityAssuranceFallCourseOffering.get_students).not.toBeNull()
    expect(catalog).not.toBeNull()
  })
})
