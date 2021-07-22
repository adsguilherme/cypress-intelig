/// <reference types="cypress" />

import LoginPage from '../support/page/login'
import MinhaContaPage from '../support/page/minhaConta'


//Require é uma 1ª maneira de acessar o arquivo user.json da pasta fixture
//const data = require('../fixtures/user.json')

context('Login', () => {

    // cy.fixture é uma outra maneira de utilizar. Ele é um método nativo do cypress.
    // Sendo uma outra maneira de chamar os arquivos de fixture para a spec.

    let data

    before(() => {
        cy.fixture('user').then( dadosUsuario => {
            data = dadosUsuario
        })
    })    

    beforeEach(() => {
        cy.visit('/')
    })
    it('Com o usuário cadastrado redirecionar para a página de Minha Conta', () => {
        cy.get('.icon-user-unfollow').click()
        
        /*
        cy.get('#username').type(data.usuario)
        cy.get('#password').type(data.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('a > .hidden-xs').should('contain', 'Welcome Eshi Cruz !')
        cy.get('.page-title').should('contain', 'Minha conta')
        */

        //PAGEOBJECT
        /*  
        LoginPage.login(data.usuario, data.senha)
        MinhaContaPage.getUsuarioLogado().should('contain', 'Welcome Eshi Cruz !')
        MinhaContaPage.getPageTitle().should('contain', 'Minha conta')
        */

        //COMMANDS
        cy.login(data.usuario, data.senha)
        cy.mensagemBoasVindas().should('contain', 'Welcome Eshi Cruz !')
        
    })
})


// HACK
// Como boa pratica, as asserções não devem ser feitas internas a uma classe.
// O ideial é que as asserções sejam realizada dentro do teste (spec).