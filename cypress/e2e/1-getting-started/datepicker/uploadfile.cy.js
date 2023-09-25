describe('login into online communities using cypress', ()=>{
    it('login successfully', () => {

        cy.viewport(1920, 1080);
         cy.visit('https://test-communities.oomi.co.uk/')
        cy.get('#UserName').type('Tahir')
         cy.get('#Password').type('mUp0J1/zu2yqFRQe4hVHMA==')
         cy.get('.login-button').click()
         //navigate to file page 
         
    })
})
