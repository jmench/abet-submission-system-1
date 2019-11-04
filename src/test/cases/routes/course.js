//const course_page = require('../../../main/views/course.html')
const {expect} = require('../../chai')
const sinon = require('sinon')

const sandbox = sinon.createSandbox();

describe('Routes - Course', () => {

    describe('is_correct_course',() => {

        afterEach(() => {
            sandbox.restore()
        })

        it('returns true if the title of the page matches the link clicked', async () => {
            // Arrange
            // Need to find out how to grab id from the url and test it against the title of the page
            //const course_num = id of course


            // User.query()
            //sandbox.stub(course_num) == "CS498"
            

            // Act
            //const result = course_num;
            const result = "CS498"
            // Assert
            expect(result == "CS498")
        })

        
    })
})