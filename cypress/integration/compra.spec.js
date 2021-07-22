/// <reference types="cypress" />

//const data = require('../fixtures/faturamento.json')

context('Fluxo de compra ', () => {

    // Depois de cada cenário/teste (it)
    afterEach(() => {
        cy.screenshot()
    })

    it('Clicando no link comprar deve direcionar para a página de compra', () => {
        
        cy.paginaDeCompra()

        // cy.visit('/')

        // cy.get('#primary-menu > .menu-item-629 > a').as('menuCompra')
        // cy.get('@menuCompra').click()
        // cy.contains('Produtos')

        // cy.get('@menuCompra').contains('Comprar').and('have.attr', 'href').and('include', 'shop')
        
        // cy.get('.page-title').should('contain', 'Produtos')

        // cy.url().should('contain', 'shop')
    })
    
    it('Selecionando primeiro produto da listagem', () => {
        cy.selecioneProduto()
        
        // cy.visit('shop')
        
        // cy.get('div[data-product-id=2559]').click()
        // cy.contains('Abominable Hoodie')
    })
    
    it('Adicionando produto ao carrinho e realizando checkout', () => {
        // cy.visit('product/abominable-hoodie')

        describe('Adicionando produto', () => {
            
            cy.adicioneProduto()

            // cy.get('.button-variable-item-XS').click()
            // cy.get('.button-variable-item-Blue').click()
            // cy.get('.single_add_to_cart_button').click()
        })
        
        describe('Verificando carrinho', () => {
            
            cy.verifiqueCarrinho()

            // cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
            // cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()
            // cy.get('.page-title').should('contain', 'Carrinho')
            // cy.url().should('contain', 'cart')
            // cy.get('.checkout-button').click() 
        })
        
        describe('Realizando checkout', () => {
            
            cy.realizeCheckout()

            // cy.url().should('contain', 'checkout')
            // cy.get('#billing_first_name').type('Mestre')
            // cy.get('#billing_last_name').type('Kame')
            // cy.get('#billing_company').type('Capsula Corp')
            
            // cy.get('select#billing_country').select(data.pais, { force: true })
            
            // cy.get('#billing_address_1').type(data.endereco)
            // cy.get('#billing_address_2').type(data.complemento)
            // cy.get('#billing_city').type(data.cidade)
            // cy.get('select#billing_state').select(data.estado, { force: true })
            // cy.get('#billing_postcode').type(data.cep)
            // cy.get('#billing_phone').type(data.fone)
            // cy.get('#billing_email').type(data.email)
            // cy.get('#order_comments').type(data.comentario)
            
            // cy.get('#place_order').click()
        })

        describe('Finalizando pedido ', () => {
            
            cy.finalizePedido()
            
            // cy.url().should('contain', 'order-received')
            // cy.get('.page-title').should('contain', 'Pedido recebido')
            
        })
    })
})   