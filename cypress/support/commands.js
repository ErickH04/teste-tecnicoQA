// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add('start', () => {
  cy.viewport(1440, 900)
  cy.visit('https://mini-erp-qa.vercel.app/')
})





Cypress.Commands.add('submitcadastro', () => {

    const skuAleatorio = `SKU-${Date.now()}`
    cy.get('[data-cy="create"]').click()
    cy.get('[data-cy="field-name"]').type('Processador')
    cy.get('[data-cy="field-price"]').type('40.50')
    cy.get('[data-cy="field-sku"]').type(skuAleatorio)
    cy.get('[data-cy="field-category"]').type('Perifericos')
    cy.get('[data-cy="save"]').click()
})


Cypress.Commands.add('submitSKU', () => {

    cy.get('[data-cy="create"]').click()
    cy.get('[data-cy="field-name"]').type('Processador')
    cy.get('[data-cy="field-price"]').type('40.50')
    cy.get('[data-cy="field-sku"]').type('I5-10400F')
    cy.get('[data-cy="field-category"]').type('Perifericos')
    cy.get('[data-cy="save"]').click()

})



Cypress.Commands.add('submitvalor', () => {

    const skuAleatorio = `SKU-${Date.now()}`
   
    cy.get('[data-cy="create"]').click()
    cy.get('[data-cy="field-name"]').type('Processador')
    cy.get('[data-cy="field-price"]').type('@@@teste')
    cy.get('[data-cy="field-sku"]').type(skuAleatorio)
    cy.get('[data-cy="field-category"]').type('Perifericos')
    cy.get('[data-cy="save"]').click()
    
 })
