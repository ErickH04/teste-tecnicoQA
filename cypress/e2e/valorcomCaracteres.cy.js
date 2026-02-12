describe('Adicionando caracteres para validar regra de negocio', () => {
  it('Deve validar o retorno ao adicionar letras e caracteres especiais no campo valor', () => {

     cy.start()
     cy.submitvalor('create', 'name', 'price', 'sku', 'category')
     cy.contains('Invalid price. Numbers only (example: 10.50).' ).should('be.visible')






     })
})