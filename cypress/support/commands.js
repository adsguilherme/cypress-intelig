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

const data = require('../fixtures/faturamento.json')

Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha)
    cy.get('.woocommerce-form > .button').click()
})

Cypress.Commands.add('mensagemBoasVindas', () => {
    cy.get('a > .hidden-xs')
})

Cypress.Commands.add('paginaDeCompra', () => {
    cy.visit('/')
    cy.get('#primary-menu > .menu-item-629 > a').as('menuCompra')
    cy.get('@menuCompra').click()
    cy.contains('Produtos')
    cy.get('@menuCompra').contains('Comprar').and('have.attr', 'href').and('include', 'shop')
    cy.get('.page-title').should('contain', 'Produtos')
    cy.url().should('contain', 'shop')
})

Cypress.Commands.add('selecioneProduto', () => {
    cy.visit('shop')
    cy.get('div[data-product-id=2559]').click()
    cy.contains('Abominable Hoodie')
})

Cypress.Commands.add('adicioneProduto', () => {
    cy.visit('product/abominable-hoodie')
    cy.get('.button-variable-item-XS').click()
    cy.get('.button-variable-item-Blue').click()
    cy.get('.single_add_to_cart_button').click()
})

Cypress.Commands.add('verifiqueCarrinho', () => {
    cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
    cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()
    cy.get('.page-title').should('contain', 'Carrinho')
    cy.url().should('contain', 'cart')
    cy.get('.checkout-button').click() 
})

Cypress.Commands.add('realizeCheckout', () => {
    cy.url().should('contain', 'checkout')
    cy.get('#billing_first_name').type('Mestre')
    cy.get('#billing_last_name').type('Kame')
    cy.get('#billing_company').type('Capsula Corp')
    cy.get('select#billing_country').select(data.pais, { force: true })
    cy.get('#billing_address_1').type(data.endereco)
    cy.get('#billing_address_2').type(data.complemento)
    cy.get('#billing_city').type(data.cidade)
    cy.get('select#billing_state').select(data.estado, { force: true })
    cy.get('#billing_postcode').type(data.cep)
    cy.get('#billing_phone').type(data.fone)
    cy.get('#billing_email').type(data.email)
    cy.get('#order_comments').type(data.comentario)
    cy.get('#place_order').click()
})

Cypress.Commands.add('finalizePedido', () => {
    cy.url().should('contain', 'order-received')
    cy.get('.page-title').should('contain', 'Pedido recebido')
})