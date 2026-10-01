describe('Gerenciamento de contas github', () => {
    beforeEach(() => {
        cy.login()
        cy.goTo('Tabela', 'Perfis do GitHub')
    })

    it('Deve adicionar uma conta github', () => {
        cy.get('#name').type('Jhon Pablo')
        cy.get('#username').type('Jhonzz')
        cy.get('#profile').type('QA')

        cy.contains('button', 'Adicionar Perfil').click()

        cy.get('#name').type('Jhon Pablo')
        cy.get('#username').type('qajhon')
        cy.get('#profile').type('QA')

        cy.contains('button', 'Adicionar Perfil').click()

        cy.contains('table tbody tr', 'qajhon')
            .should('be.visible')
            .as('trProfile') //alias to use in different field validations

        cy.get('@trProfile')
            .contains('Jhon Pablo')
            .should('be.visible')

        cy.get('@trProfile')
            .contains('QA')
            .should('be.visible')
    })

    it('Deve poder remover um perfil do github', () => {

        const profile = {
            name: 'Jhon Pablo',
            username: 'Jhon123',
            role: 'QA'
        }

        cy.get('#name').type(profile.name)
        cy.get('#username').type(profile.username)
        cy.get('#profile').type(profile.role)

        cy.contains('button', 'Adicionar Perfil').click()

        cy.contains('table tbody tr', profile.username)
            .should('be.visible')
            .as('trProfile') //alias to use in different field validations

        cy.get('@trProfile').find('button[title="Remover perfil"]').click()

        cy.contains('table tbody', profile.username)
            .should('not.exist')
    })
    
    it('Deve validar o link do github', () => {

        const profile = {
            name: 'Jhon Pablo',
            username: 'Jhonzz',
            role: 'QA'
        }

        cy.get('#name').type(profile.name)
        cy.get('#username').type(profile.username)
        cy.get('#profile').type(profile.role)

        cy.contains('button', 'Adicionar Perfil').click()

        cy.contains('table tbody tr', profile.username)
            .should('be.visible')
            .as('trProfile') //alias to use in different field validations

        cy.get('@trProfile').find('a')
        .should('have.attr', 'href', 'https://github.com/' + profile.username)
        .and('have.attr', 'target', '_blank')

    })
})