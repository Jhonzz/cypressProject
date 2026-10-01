import { personal, company } from '../fixtures/consultancy.json' //to use arrow function, you cannot use this to access the fixture data, so we import it directly

describe('Formulário de Consultoria', () => {

    beforeEach(() => {
        cy.login()
        cy.goTo('Formulários', 'Consultoria')

        //    cy.fixture('consultancy').as('consultancyData') if you want to use function() instead of arrow function, you can use this to access the fixture data
    })

    it('Deve solicitar consultoria individual', () => {
        {
            cy.fillConsultancyForm(personal)
            cy.submitConsultancyForm()
            cy.validateConsultancyModal()
        }
    })


    it('Deve solicitar consultoria In Company', () => {
        //
        //       const consultancyForm = this.consultancyData.company - if you use arrow function, you cannot use this to access the fixture data
        cy.fillConsultancyForm(company)
        cy.submitConsultancyForm()
        cy.validateConsultancyModal()
    })

    it('Deve verificar os campos obrigatórios', () => {

        cy.submitConsultancyForm()

        const requiredFields = [
            { label: 'Nome Completo', message: 'Campo obrigatório' },
            { label: 'Email', message: 'Campo obrigatório' },
            { label: 'Li e aceito os', message: 'Você precisa aceitar os termos de uso' }
        ]

        requiredFields.forEach(({ label, message }) => {
            //label[text()="Email *"]/..//p used in other framework, for example Selenium
            cy.contains('label', label)
                .parent()
                .find('p')
                .should('have.text', message) //assertion to check if the error message is visible
                .and('have.class', 'text-red-400') //assert the layout is correct
                .and('have.css', 'color', 'rgb(248, 113, 113)')
        })
    })
})