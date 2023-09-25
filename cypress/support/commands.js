  import Datepickerpage from './Datepickerpage';
   import DateUtils from './utlity/DateUtils';

    var datepickerPage = new Datepickerpage();

    var dateUtils = new DateUtils();


  Cypress.Commands.add('selectYear',(yearName)=> {
    const currentYear =new Date().getFullYear();
    datepickerPage.getYearName().then(($year) => {

      if($year.text()== yearName){
        cy.log(yearName +'year is selected')
        return
      }

      else{
        if(yearName < currentYear){
          datepickerPage.getNavigateBack().click()
        }
        else if(yearName > currentYear){
          datepickerPage.getNavigateForward().click()
        }
      }
      cy.selectYear(yearName);
      
    });
  });

  Cypress.Commands.add('selectMonth', (monthName) => {
    let currentMonth = new Date().getMonth() +1                     //currentMonth = new Date().getMonth() +1
    let givenMonth = dateUtils.getMonthIndexFromName(monthName)             //givenMonth = dateUtils.getMonthIndexFromName(monthName)
     datepickerPage.getMonthName().then(($month) => {          //datePickerPage.getMonthName().then(($month) => {
        if($month.text().includes(monthName)){
            cy.log(monthName + 'month is selected')
            return
        }
        else{
            if(givenMonth < currentMonth){
                datepickerPage.getNavigateForward().click()
            }
            else if(givenMonth  > currentMonth){
                datepickerPage.getNavigateBack().click()
            }
        }
        cy.selectMonth(monthName)
    })

  })
    Cypress.Commands.add('selectDay', (dayName) =>{
      datepickerPage.getCalendarDays().eq(dayName - 1).click()
      cy.log(dayName + 'day name is selected')
  })




                                   //For announcement
                                     //Sepcific page 
                                       Cypress.Commands.add('goToPage', (pageNumber) => {
                                       cy.get('.pagination-control').contains(pageNumber).invoke('click') // Use invoke to trigger the click event directly
  //  cy.wait(6000)
  //   cy.log(pageNumber)
                                               });
  
                                                         //Next page
                                           Cypress.Commands.add('goToNextPage', () => {
                                                   cy.get('.pagination-control').contains('Next').click();
                                                          });

                                                                          //Prvious page
                                                            Cypress.Commands.add('goToNextPage', () => {
                                                               cy.get('.pagination-control')
                                                            .contains('Next')
                                                             .click();
                                                                 })
       



