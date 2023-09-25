class Datepickerpage{
    getDatePicker(){
        return cy.get('input#StartDate')
    }
    getEndDatePicker(){
        return cy.get('input#EndDate')
    }
    
getCalendar(){
    return cy.get('div#ui-datepicker-div')
}

getNavigateBack(){
    return cy.get('.ui-datepicker-prev')  

}

getNavigateForward(){
    return cy.get('.ui-datepicker-next')
}

getMonthName(){
    return cy.get('.ui-datepicker-month')
}



getYearName(){
    return cy.get('.ui-datepicker-year')
}

getCalendarDays(){
    return cy.get('.ui-state-default')
}
}
export default Datepickerpage