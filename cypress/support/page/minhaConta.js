class MinhaContaPage{
    
    getUsuarioLogado() {
        return cy.get('a > .hidden-xs')
    }

    getPageTitle() {
        return cy.get('.page-title')
    }    
}

export default new MinhaContaPage()