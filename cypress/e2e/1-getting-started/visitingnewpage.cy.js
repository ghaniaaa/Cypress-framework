import 'cypress-xpath'
import 'cypress-iframe'
describe('login into online communities using cypress', ()=>{
    it('login successfully', () => {

        cy.viewport(1920, 1080);
         cy.visit('https://test-communities.oomi.co.uk/')
        cy.get('#UserName').type('Tahir')
         cy.get('#Password').type('mUp0J1/zu2yqFRQe4hVHMA==')
         cy.get('.login-button').click()
         //iframe
         // Select an iframe by its name attribute
              // cy.iframe(0).then((iframe) => {
    // You can interact with elements inside the iframe using `iframe`
//scroll
cy.get('#Title_114418').scrollIntoView()
        
//Navigating to next group 
cy.xpath("(//a[text()='UK Team'])[1]").click()
  });
         
    })
// })
