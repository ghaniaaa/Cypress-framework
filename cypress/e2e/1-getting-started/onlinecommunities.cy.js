describe('login into online communities using cypress', ()=>{
    it('login successfully', () => {
        cy.viewport(1920, 1080);
         cy.visit('https://test-communities.oomi.co.uk/')
        // cy.get("a[href='/$Login/Index/~LoginForm/']").click()
        cy.get('#UserName').type('Tahir')
         cy.get('#Password').type('mUp0J1/zu2yqFRQe4hVHMA==')
         cy.get('.login-button').click()
        // cy.get('Discussion').click()
         //cy.xpath('//a[@href="/forum"]').click();
        //cy.get('https://test-communities.oomi.co.uk/forum').click()

        // Navigate to Forum/discussion page 
        cy.get('#NavPage-67737 > a').click()
        // cy.get('.group-button-discussion > button').click()

        // cy.contains(' + Add new discussion').click()
        //     "defaultCommandTimeout"; 60000
        //     "pageLoadTimeout"; 10000 
        
    //    // Use the cy.xpath() command with the XPath selector
    //cy.xpath('//button[contains(@onclick, "window.location.href=\'http://test-communities.oomi.co.uk/forum/$Forum/AddTopic/Z8CX20sAkoN3juJY2t8ogg==\'")]')
    // .click()

    // Locate the button by its `onclick` attribute
    //cy.get('button[onclick="window.location.href=\'http://test-communities.oomi.co.uk/forum/$Forum/AddTopic/Z8CX20sAkoN3juJY2t8ogg==\'"]').click();
  
    //My members and friends 
   cy.get('#Search').type('Ghania')
   cy.get('.col-lg-2 > .input-group-append > .form-btn').click()
  //  cy.wait(6000)
    // cy.get('.close-icon').click()

cy.get('[type="text"]').clear() // Clear text input
//cy.wait(6000)
// cy.get('#Search').type('Ghania').clear() // Clear textarea
// cy.wait(6000)
cy.focused().clear() 
cy.get('.col-lg-2 > .input-group-append > .form-btn').click()

// Navigate to explore page 
cy.get('#NavPage--1 > a')
//cy.wait(6000)
   
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
    // cy.goToPreviousPage();


     //go to any page while page number is define in command using using the ftn name here to call the function 
    //cy.goToPage(6)

     //Going to next page : only chnage the number from 2 to 8 or any page you want to visit manually 
    //  cy.get('[onclick="GetBulletinPage(5, 114482,this);"]').click()
     //Manually second option
    cy.get('.pagination-control').contains('7').click()

    // cy.wait(6000)
  
    
})
})