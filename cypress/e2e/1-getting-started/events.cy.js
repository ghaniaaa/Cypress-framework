describe('login into online communities using cypress', ()=>{
    it('login successfully', () => {

        cy.viewport(1920, 1080);
         cy.visit('https://test-communities.oomi.co.uk/')
        cy.get('#UserName').type('Tahir')
         cy.get('#Password').type('mUp0J1/zu2yqFRQe4hVHMA==')
         cy.get('.login-button').click()

         //navigate event
         cy.get('#NavPage-67738 > a').click()
         //Create event
  cy.get('.add-event-btn').click()
  cy.get('#evtNameTb').type('TGS funds') //mandatory field
  cy.get('#CategoryId').select('Meeting')
  //.should('have.value', 'Meeting')
  cy.get('#newCategories').type('TGS team meeting')
  cy.get('#Host').type('Tahir') //mandatory field
  cy.get('#Location').type('I-8 markaz, Islmabad') //mandatory field
  cy.get('#Address').type('Opposite allied bank, coffee beans and tea leaf  2nd floor')
  cy.get('#City').type('Islamabad')
  cy.get('#PostCode').type('00000') 
  // Your Cypress test script

// Import the custom command
// import './commands'; // Use require if you are using CommonJS

// ...your other Cypress test code...

// Your Cypress test script

// ...your other Cypress test code...

it('should compare specific date with current date', () => {
    // Get the current date using the custom command
    cy.getCurrentDate().then((StartDate) => {
      // Perform assertions or use currentDate as needed
      const specificDate = '21/12/2023'; // Replace with the date you want to compare
      expect(StartDate).to.eq(specificDate);
    });
  });
  
  // ...more test cases...
  
  //Start time
 cy.get('#StartDate').clear()
// .type('21/12/2023')
  cy.get('#StartHour').select('10')
  cy.get('#StartMin').select('00')
  cy.get('#StartAmPm').select('AM')
  //End time
//   cy.get('#EndDate').clear().type('21/12/2023')
  cy.get('#EndHour').select('5')
  cy.get('#EndMin').select('00')
  cy.get('#EndAmPm').select('PM')

// cy.get('#ui-datepicker-div').click({force: true});
 // Assuming the calendar date elements have specific attributes like 'data-date'
// cy.get('.ui-datepicker-calendar')
// .find('[data-date="2023-09-15"]')
// .click();

// cy.get('#your-input-field-id').should('have.value', '09/15/2023'); // Adjust date format as needed

// // Click next arrow to move to the next month
// cy.get('.ui-datepicker-next').click();

// // Click previous arrow to move to the previous month
// cy.get('.ui-datepicker-prev').click();
 
//cy.get('#dayDropdown').select('8');

// cy.get('#ui-datepicker-div', { timeout: 10000 }) // Wait for the datepicker to appear
// .find('#dayDropdown') // Locate the day dropdown within the datepicker
// .select('8');
// // Assert the month and year
// cy.get('.ui-datepicker-month').should('have.text', 'September');
// cy.get('.ui-datepicker-year').should('have.text', '2023');

// // Assert the selected day in the dropdown
// cy.get('#dayDropdown').should('have.value', '8');




  
  cy.get('#IsAllowCommenting').check()
  cy.get('#Description').type('This is for testing purpose using cypress :)')
//Save the event
//   cy.get('#eventSaveBtn').click()
  
    })
})
