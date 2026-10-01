describe('Tocar o video', () => {
    it('Deve poder tocar o video de exemplo', () => {
        cy.login();
        cy.contains('Video').click()

        cy.get('iframe[title="Video Player"]')
            .should('exist')
            .its('0.contentDocument.body') //get the body of the iframe
            .then(cy.wrap) //wrap the body of the iframe to be able to use cypress commands on it
            .as('iframePlayer') //alias to use the body of the iframe in the next commands

        cy.get('@iframePlayer')
            .find('.play-button')
            .click()

        cy.get('@iframePlayer')
            .find('.pause-button')
            .should('be.visible') //assertion to check if the pause button is visible after clicking the play button
    })
})