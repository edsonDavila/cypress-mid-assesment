/// <reference types="cypress" />


describe("Links Validation", () => {
    beforeEach(() => {
        cy.visit('/links')
    })

    it('Text box fill', () => {
        
        cy.get('#simpleLink').should('have.attr','href','https://demoqa.com')
        .and('have.attr','target','_blank')
        .and('have.text','Home')
        
       cy.get('#dynamicLink').should('have.attr','href','https://demoqa.com')
       .and('have.attr','target','_blank')
       .and('contain.text','Home')



    })

})