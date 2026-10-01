Cypress.Commands.add('fillConsultancyForm', (form) => {

    //          or this.consultancyData.personal if you use function() instead of arrow function, you can use this to access the fixture data
    //          const consultancyForm = consultancyData.personal - if you use arrow function, you cannot use this to access the fixture data
    cy.get('input[placeholder="Digite seu nome completo"]').type(form.name)
    cy.get('input[placeholder="Digite seu email"]').type(form.email)
    cy.get('input[placeholder="(00) 00000-0000"]')
        .type(form.phone)
    //.should('have.value', '(11) 99999-9999')

    cy.contains('label', 'Tipo de Consultoria')
        .parent()
        .find('select')
        .select(form.consultancyType) //value of option to be selected

    if (form.personType === 'Pessoa Física') {
        cy.contains('label', 'Pessoa Física')
            .find('input')
            .click()
            .should('be.checked') //assertion to check if the selected option is marked

        cy.contains('label', 'Pessoa Jurídica')
            .find('input')
            .should('be.not.checked') //assertion to check if the other option is not marked

        cy.contains('label', 'CPF')
            .parent()
            .find('input')
            .type(form.cpf)
        // .should('have.value', '556.680.690-28')
    }

    if (form.personType === 'Pessoa Jurídica') {
        cy.contains('label', 'Pessoa Jurídica')
            .find('input')
            .click()
            .should('be.checked') //assertion to check if the selected option is marked

        cy.contains('label', 'Pessoa Física')
            .find('input')
            .should('be.not.checked') //assertion to check if the other option is not marked

        cy.contains('label', 'CNPJ')
            .parent()
            .find('input')
            .type(form.cnpj)
        // .should('have.value', '556.680.690-28')
    }

    //Iterate over the array of discovery channels and check each checkbox
    form.discoveryChannels.forEach((channel) => {
        cy.contains('label', channel)
            .find('input')
            .check() //mark the option of checkbox
            .should('be.checked')
    })

    cy.get('input[type="file"]')
        .selectFile(form.file, { force: true })

    cy.get('textarea[placeholder = "Descreva mais detalhes sobre sua necessidade"]')
        .type(form.description)


    form.technologies.forEach((tech) => {
        cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
            .type(`${tech}{enter}`)

        cy.contains('label', 'Tecnologias')
            .parent()
            .contains('span', tech)
            .should('be.visible')
    })

    if (form.termsAccepted === true) {
        cy.contains('label', 'termos de uso')
            .find('input')
            .check()
    }
})

Cypress.Commands.add('submitConsultancyForm', () => {
    cy.contains('button', 'Enviar formulário')
        .click()
})

Cypress.Commands.add('validateConsultancyModal', () => {
    cy.get('.modal', { timeout: 7000 }) //css selector class and explicit timemout to wait for the modal to appear
        .should('be.visible')
        .and('contain.text', 'Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.')
})