/// <reference types="cypress" />


describe("Select Menus", () => {
    beforeEach(() => {
        cy.visit('/select-menu')
    })

    it('Select menus test 1', () => {
        cy.get('#withOptGroup').click()
        cy.contains('Group 1, option 2').click()
        cy.get('#withOptGroup').should('contain.text','Group 1, option 2')

        cy.get('#selectOne').click()
        cy.contains('Mrs.').click()
        cy.get('#selectOne').should('contain.text','Mrs.')

        cy.get('#oldSelectMenu').select('Yellow').invoke('val').should('eq','3')

        cy.get('div').contains('Select...').click()
        cy.get('#react-select-4-option-2').contains('Black').click()
        cy.get("div[class*='multiValue']").each(itemList => {
            const itemText = itemList.text()
            switch (itemText) {
                case 'Black':
                    cy.wrap(itemList).should('have.text', 'Black')
                    break;
            }
        })
        cy.get('#cars').select('Saab', { force: true }).invoke('val').should('deep.equal',['saab'])


    })

    it('Select menus test 2', () => {
        cy.get('#withOptGroup').click()
        cy.contains('A root option').click()
        cy.get('#withOptGroup').should('contain.text','A root option')
        cy.get('#selectOne').click()
        cy.contains('Other').click()
        cy.get('#selectOne').should('contain.text','Other')

        cy.get('#oldSelectMenu').select('Blue').invoke('val').should('eq','1')

        cy.get('div').contains('Select...').click()
        cy.get('#react-select-4-option-2').contains('Black').click()
        cy.get('#react-select-4-option-1').contains('Blue').click()
        cy.get('#react-select-4-option-0').contains('Green').click()
        cy.get("div[class*='multiValue']").each(itemList => {
            const itemText = itemList.text()
            switch (itemText) {
                case 'Black':
                    cy.wrap(itemList).should('have.text', 'Black')
                    break;
                case 'Blue':
                    cy.wrap(itemList).should('have.text', 'Blue')
                    break;
                case 'Green':
                    cy.wrap(itemList).should('have.text', 'Green')
                    break;
            }
        })

        cy.get('#cars').select(['Saab', 'Audi'], { force: true }).invoke('val').should('deep.equal',['saab','audi'])


    })

})