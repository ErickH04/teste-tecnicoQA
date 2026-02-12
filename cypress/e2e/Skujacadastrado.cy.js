describe('SKU Já exstente', () => {
  it('Devera ser validado a mensagem ao tentar cadastrar um SKU já utilizado', () => {
  
        cy.start()
        cy.submitSKU('create', 'name', 'price', 'sku', 'category')
        cy.contains('SKU already exists').should('be.visible')









      })
})