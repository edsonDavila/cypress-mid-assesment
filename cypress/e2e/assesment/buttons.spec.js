/// <reference types="cypress" />


describe("Click on all buttons and validate messages",() =>{
    beforeEach(() =>{
        cy.visit('/buttons')
    })

    it('Double click button', () => {
        const text = 'You have done a double click'
        cy.get('#doubleClickBtn').dblclick()
        cy.get('#doubleClickMessage').should("have.text",text)
    })

    it('Right click button', () => {
        const text = 'You have done a right click'
        cy.get('#rightClickBtn').rightclick()
        cy.get('#rightClickMessage').should("have.text",text)
    })

    it('Click button', () => {
        const text = 'You have done a dynamic click'
        cy.get('.btn.btn-primary').eq(2).click()
        cy.get('#dynamicClickMessage').should("have.text",text)
    })

})