describe('login into online communities using cypress', ()=>{
    it('login successfully', () => {
        cy.viewport(1920, 1080);
         cy.visit('https://test-communities.oomi.co.uk/')
        // cy.get("a[href='/$Login/Index/~LoginForm/']").click()
        cy.get('#UserName').type('Tahir')
         cy.get('#Password').type('mUp0J1/zu2yqFRQe4hVHMA==')
         cy.get('.login-button').click()
        

        // Navigate to Forum/discussion page 
        cy.get('#NavPage-67737 > a').click()
        //cy.get('.group-button-discussion > button').click()

        cy.contains(' + Add new discussion').click()
    })
})
