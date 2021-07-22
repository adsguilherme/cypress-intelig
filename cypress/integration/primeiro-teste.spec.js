/// <reference types="cypress" />

 context('Validar menus', () => {

    // Hooks
    // Antes de cada cenário/teste (it)
    beforeEach(() => {
        cy.visit('/')
    })

    // Depois de cada cenário/teste (it)
    afterEach(() => {
        cy.screenshot()
    })

     it('Clicando no link comprar deve direcionar para a página de compra', () => {

         cy.get('#primary-menu > .menu-item-629 > a').as('menuCompra')
         cy.get('@menuCompra').click()
         cy.contains('Produtos')

         cy.get('@menuCompra').contains('Comprar').and('have.attr', 'href').and('include', 'shop')
         
         cy.get('.page-title').should('contain', 'Produtos')

         cy.url().should('contain', 'shop')
        })
        
    it('Clicando no link de conta deve direcionar para a página de login/cadastro', () => {

        cy.get('.icon-user-unfollow').click()
        cy.url().should('contain', '/my-account-2')
     })
 })