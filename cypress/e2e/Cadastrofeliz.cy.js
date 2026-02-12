describe('Cadastro de produto', () => {
  it('Deve efetuar o cadastro de produtos corretamente', () => {
  
    cy.start()
    cy.submitcadastro('create', 'name', 'price', 'sku', 'category')

    

    ///... Validação do produto cadastrado
    cy.get('[data-cy="next"]').click()
    cy.wait(3000)
    cy.contains('Perifericos').should('be.visible')




    ///... Utilizei o commands para deixar o código mais "limpo",e de fácil manutenção caso necessário.
    ///... Utilizei um metodo de geração de dados aleatoria para o campo SKU, assim não será necessário aterar dentro do commands sempre que o teste for rodado.

    

    
  })
})