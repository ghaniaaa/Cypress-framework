//reference types ="Cypress"
import Datepickerpage from "../../../support/Datepickerpage"

describe('datepicker', function(){
    var datepickerPage = new Datepickerpage();

before(function(){
    cy.fixture("example").then(function(data){
        this.data=data;
    })
})
     


it('navigate and open datepicker', function(){
    cy.viewport(1920, 1080);
cy.visit(this.data.url)
 
cy.get('#UserName').type('Tahir')
         cy.get('#Password').type('mUp0J1/zu2yqFRQe4hVHMA==')
         cy.get('.login-button').click()

     //navigate event
          cy.get('#NavPage-67738 > a').click()
     //Create EVENT
          cy.get('.add-event-btn').click()
          cy.get('#evtNameTb').type('Event posted by cypress') //mandatory field
          cy.get('#CategoryId').select('Meeting')
     //.should('have.value', 'Meeting')
          cy.get('#newCategories').type('TGS team meeting')
          cy.get('#Host').type('Tahir') //mandatory field
          cy.get('#Location').type('Islamabad')
          cy.get('#Address').type('Opposite allied bank, coffee beans and tea leaf  2nd floor')
          cy.get('#City').type('Islamabad')
          cy.get('#PostCode').type('00000') 
          datepickerPage.getDatePicker().click()
          datepickerPage.getCalendar().should('be.visible')
          cy.selectYear(2024)
    cy.selectMonth('March')
     cy.selectDay(18)
    cy.get('#StartHour').select('10')
    cy.get('#StartMin').select('00')
    cy.get('#StartAmPm').select('AM')

    datepickerPage.getEndDatePicker().click()
    datepickerPage.getCalendar().should('be.visible')
    cy.selectYear(2024)
    cy.selectMonth('April')
     cy.selectDay(19)
    cy.get('#EndHour').select('2')
    cy.get('#EndMin').select('00')
    cy.get('#EndAmPm').select('AM')

    cy.get('#Description').type('This is for testing purpose')
    cy.get('#IsAllowCommenting').click()
    cy.get('#IsHowGuestList').click()

    cy.get('#eventSaveBtn').click()
    // cy.get('.save-button button#eventSaveBtn').click({force: true});

})
})