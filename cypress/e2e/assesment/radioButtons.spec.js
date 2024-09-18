/// <reference types="cypress" />


describe("Click on all radio buttons and validate messages",() =>{
    beforeEach(() =>{
        cy.visit('/radio-button')
    })

    it('click Yes radio button', () => {
        const text = 'You have selected Yes'
        //cy.get('#yesRadio').parent().check()
        cy.get('#yesRadio').check({ force: true })

        cy.get('p').contains('You have selected').should("have.text",text)
    })

    it('click Impressive radio button', () => {
        const text = 'You have selected Impressive'
        //cy.get('#impressiveRadio').parent().check()
        cy.get('#impressiveRadio').check({ force: true })

        cy.get('p').contains('You have selected').should("have.text",text)
    })

    it('Verify disabled radio button', () => {
        cy.get('#noRadio').should('be.disabled')
        
    })

})