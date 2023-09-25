
describe('login into online communities using cypress', ()=>{
    it('login successfully', () => {

        cy.viewport(1920, 1080);
         cy.visit('https://test-communities.oomi.co.uk/')
        cy.get('#UserName').type('Tahir')
         cy.get('#Password').type('mUp0J1/zu2yqFRQe4hVHMA==')
         cy.get('.login-button').click()

         //Navigate to announcemnet page
         cy.get('#NavPage-67757 > a').click()

         //post title 
         cy.get('#PostTitle').type('Announcement posted by cypress')
         //Description
         cy.get('#PostMessage').type('Hi there')

         //Post
         cy.get('.announcements-post-button').click()

        //  next page manually 
        // cy.get('.Next-Page').click()

        //next page by ftn, Go to the next page
         cy.goToNextPage();
        
 
         // Go to the previous page using ftn calling 
        //cy.goToPreviousPage();


         //go to any page while page number is define in command using using the ftn name here to call the function 
        //cy.goToPage(6)

         //Going to next page : only chnage the number from 2 to 8 or any page you want to visit manually 
        //  cy.get('[onclick="GetBulletinPage(5, 114482,this);"]').click()
         //Manually second option
        cy.get('.pagination-control').contains('7').click()

        // cy.wait(6000)














    })
})
