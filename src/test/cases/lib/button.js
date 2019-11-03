const user_lib = require('../../../main/lib/button')
//const html_page = require('../../../main/views/course/index.html')
const {expect} = require('../../chai')
const sinon = require('sinon')

const sandbox = sinon.createSandbox();

describe('Lib - Button', () => {

    describe('is_button',() => {

        afterEach(() => {
            sandbox.restore()
        })

        it('returns true if the button exists', async () => {
            // Arrange
            const User = require('../../../main/lib/button')


            // User.query()
            sandbox.stub(User,"is_button").returns(true)
            

            // Act
            const result = user_lib.is_button;
            //const result = true
            // Assert
            expect(result).to.true
        })

        
    })
})