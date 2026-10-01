describe('Kanban Board', () => {

    it('Deve mover uma tarefa de Todo para Done e atualizar o board', () => {
        cy.login();
        cy.contains('Kanban').click()

        const dataTransfer = new DataTransfer() //create a new DataTransfer object to simulate the drag and drop event

        cy.contains('div[draggable=true]', 'Documentar API')
            .trigger('dragstart', { dataTransfer }) //trigger the dragstart event on the task to be moved

        cy.get('.column-done')
            .trigger('drop', { dataTransfer }) //trigger the drop event on the column where the task will be moved
            .and('include.text', 'Documentar API')
            .and('include.text', 'Criar documentação da API com Swagger')
            .find('h3')
            .should('have.text', 'Done (4)')
    })
})