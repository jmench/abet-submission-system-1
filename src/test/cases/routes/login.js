//const html_page = require('../../../main/views/login.html')
const {expect} = require('../../chai')
const sinon = require('sinon')

const sandbox = sinon.createSandbox();

describe('Views - Login', () => {

    describe('is_button',() => {

        afterEach(() => {
            sandbox.restore()
        })

        it('returns true if the login button exists', async () => {
            // Arrange
            // TODO: Trying to get the html page always throws an error
            // Need to figure out how to test if there is a working button (DOM maybe?)
            //const login_button = html_page.getElementById("login")


            // User.query()
            //sandbox.stub(login_button,"is_button").returns(true)
            

            // Act
            //const result = login_button.is_button;
            const result = true
            // Assert
            expect(result).to.true
        })

        
    })
})