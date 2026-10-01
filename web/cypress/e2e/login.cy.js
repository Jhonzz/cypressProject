import { getCurrentDate } from "../support/actions/utils"

describe('Login', () => {

  it('Deve logar com sucesso', () => {
    cy.init()
    cy.submitLoginForm('papito@webdojo.com', 'katana123')

    cy.get('[data-cy="user-name"]')
      .should('be.visible')
      .and('have.text', 'Fernando Papito')

    cy.get('[data-cy="welcome-message"]')
      .should('be.visible')
      .and('have.text', 'Olá QA, esse é o seu Dojo para aprender Automação de Testes.')

    cy.getCookie('login_date').should('exist')
    cy.getCookie('login_date').should((cookie) => {

      expect(cookie.value).to.eq(getCurrentDate()) //validating cookie data
    })

    cy.window().then((win) => { // to use the runtime data
      const token = win.localStorage.getItem('token') //to manipulate and get token
      expect(token).to.match(/^[a-fA-F0-9]{32}$/) //validate md5 token format
    })

  })

  it('Não deve logar com senha inválida', () => {
    cy.init()
    cy.submitLoginForm('papito@webdojo.com', 'katana321')

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')
  })

  it('Não deve logar com email inválido', () => {
    cy.init()
    cy.submitLoginForm('invalido@webdojo.com', 'katana123')

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')
  })
})