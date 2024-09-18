/// <reference types="cypress" />


describe("Text box validation and messages", () => {
    beforeEach(() => {
        cy.visit('/text-box')
    })

    it('Text box fill', () => {
        const name = 'testName testLastname'
        const email = 'test@test.com'
        const currentAddress = 'test address'
        const permanetAddress = 'test address two'

        cy.get('#userName').type(name)
        cy.get('#userEmail').type(email)
        cy.get('textarea#currentAddress').type(currentAddress)
        cy.get('textarea#permanentAddress').type(permanetAddress)
        cy.get('#submit').click()

        cy.get('#name').should('have.text',`Name:${name}`)
        cy.get('#email').should('have.text',`Email:${email}`)
        cy.get('p#currentAddress').should('have.text',`Current Address :${currentAddress} `)
        cy.get('p#permanentAddress').should('have.text',`Permananet Address :${permanetAddress}`)



    })

})