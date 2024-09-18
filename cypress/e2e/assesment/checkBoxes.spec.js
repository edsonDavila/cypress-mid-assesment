/// <reference types="cypress" />


describe("Click on all check boxes and validate messages", () => {
    beforeEach(() => {
        cy.visit('/checkbox')
    })

    it('Click check boxes, expand and collapse', () => {
        cy.get('button[aria-label="Toggle"]').click()
        cy.get('#tree-node-home').should('not.be.checked')
        cy.get('#tree-node-desktop').should('not.be.checked')
        cy.get('#tree-node-documents').should('not.be.checked')
        cy.get('#tree-node-downloads').should('not.be.checked')

        //Desktop
        cy.get('button[aria-label="Toggle"]').eq(1).click()
        cy.get('#tree-node-notes').should('not.be.checked')
        cy.get('#tree-node-commands').should('not.be.checked')

        cy.get('#tree-node-notes').check({ force: true }).should('be.checked')
        cy.get('#result').should('have.text','You have selected :notes')
        cy.get('#tree-node-commands').check({ force: true }).should('be.checked')
        cy.get('#result').should('have.text','You have selected :desktopnotescommands')
        cy.get('button[aria-label="Toggle"]').eq(1).click()
        cy.get('#tree-node-desktop').should('be.checked')
        
        //Documents
        cy.get('button[aria-label="Toggle"]').eq(2).click()
        cy.get('#tree-node-workspace').should('not.be.checked')
        cy.get('#tree-node-office').should('not.be.checked')
        
        //Workspace
        cy.get('button[aria-label="Toggle"]').eq(3).click()
        cy.get('#tree-node-react').should('not.be.checked')
        cy.get('#tree-node-angular').should('not.be.checked')
        cy.get('#tree-node-veu').should('not.be.checked')

        cy.get('#tree-node-react').check({ force: true }).should('be.checked')
        cy.get('#result').should('have.text','You have selected :desktopnotescommands'
            + 'react'
        )
        cy.get('#tree-node-angular').check({ force: true }).should('be.checked')
        cy.get('#result').should('have.text','You have selected :desktopnotescommands'
            + 'reactangular'
        )
        cy.get('#tree-node-veu').check({ force: true }).should('be.checked')
        cy.get('#result').should('have.text','You have selected :desktopnotescommandsworkspacereactangularveu')
        cy.get('button[aria-label="Toggle"]').eq(3).click()
        cy.get('#tree-node-workspace').should('be.checked')

        //Office
        cy.get('button[aria-label="Toggle"]').eq(4).click()
        cy.get('#tree-node-public').should('not.be.checked')
        cy.get('#tree-node-private').should('not.be.checked')
        cy.get('#tree-node-classified').should('not.be.checked')
        cy.get('#tree-node-general').should('not.be.checked')

        cy.get('#tree-node-public').check({ force: true }).should('be.checked')
        cy.get('#result').should('have.text',
            'You have selected :desktopnotescommandsworkspacereactangularveu'
            +'public')
        cy.get('#tree-node-private').check({ force: true }).should('be.checked')
        cy.get('#result').should('have.text',
            'You have selected :desktopnotescommandsworkspacereactangularveu'
            +'publicprivate')
        cy.get('#tree-node-classified').check({ force: true }).should('be.checked')
        cy.get('#result').should('have.text',
            'You have selected :desktopnotescommandsworkspacereactangularveu'
            +'publicprivateclassified')
        cy.get('#tree-node-general').check({ force: true }).should('be.checked')
        cy.get('#result').should('have.text',
            'You have selected :desktopnotescommandsdocumentsworkspacereactangularveu'
            +'officepublicprivateclassifiedgeneral')
        //Close Office
        cy.get('button[aria-label="Toggle"]').eq(4).click()
        cy.get('#tree-node-office').should('be.checked')
        //Close documents
        cy.get('button[aria-label="Toggle"]').eq(2).click()
        cy.get('#tree-node-documents').should('be.checked')

        //Downloads
        cy.get('button[aria-label="Toggle"]').eq(3).click()
        cy.get('#tree-node-wordFile').should('not.be.checked')
        cy.get('#tree-node-excelFile').should('not.be.checked')

        cy.get('#tree-node-wordFile').check({ force: true }).should('be.checked')
        cy.get('#result').should('have.text',
            'You have selected :desktopnotescommandsdocumentsworkspacereactangularveu'
            +'officepublicprivateclassifiedgeneral'
            + 'wordFile')
        cy.get('#tree-node-excelFile').check({ force: true }).should('be.checked')
        cy.get('#result').should('have.text',
            'You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveu'
            + 'officepublicprivateclassifiedgeneral'
            + 'downloadswordFileexcelFile')
        cy.get('button[aria-label="Toggle"]').eq(3).click()
        cy.get('#tree-node-downloads').should('be.checked')

        //close Home
        cy.get('button[aria-label="Toggle"]').eq(0).click()
        cy.get('#tree-node-home').should('be.checked')




    })

})