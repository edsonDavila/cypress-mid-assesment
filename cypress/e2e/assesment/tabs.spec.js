/// <reference types="cypress" />


describe("Verify Tabs", () => {
    beforeEach(() => {
        cy.visit('/selectable')
    })

        

    it('Verify Tab List', () => {
        cy.get("#verticalListContainer li").each(itemList => {
            cy.get('#verticalListContainer li').each( item  => {
                var itemText = item.text()
                if(item.hasClass('active')){
                   cy.wrap(item).should('have.text',itemText).and('have.class','active') 
                }
                else {
                   cy.wrap(item).should('have.text',itemText).and('not.have.class','active') 
                }
            })
            cy.wrap(itemList).click()
        })
    })

    it('Verify Tab Grid', () => {
        cy.get('#demo-tab-grid').click()
        cy.get("#gridContainer li").each(itemList => {
            cy.get('#gridContainer li').each( item  => {
                var itemText = item.text()
                if(item.hasClass('active')){
                   cy.wrap(item).should('have.text',itemText).and('have.class','active') 
                }
                else {
                   cy.wrap(item).should('have.text',itemText).and('not.have.class','active') 
                }
            })
            cy.wrap(itemList).click()
        })

    })

})