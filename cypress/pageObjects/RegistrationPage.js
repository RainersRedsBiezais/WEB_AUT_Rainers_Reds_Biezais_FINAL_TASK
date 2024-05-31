import { BasePage } from "./BasePage";

export class RegistrationPage extends BasePage{
    static get url() {
        return "";
    }

    static get setFirstName(){
        return cy.get("[placeholder='First Name']");
    }
    static get setLastName(){
        return cy.get("[placeholder='Last Name']");
    }
    static get setEmail(){
        return cy.get("[id='userEmail']");
    }
    static get setGenderMale(){
        return cy.get("[for='gender-radio-1']");
    }
    static get setPhoneNumber(){
        return cy.get("[id='userNumber']");
    }
    static get openCalendar(){
        return cy.get("[id='dateOfBirthInput']");
    }
    static get selectYear(){
        return cy.get('#dateOfBirthInput');
    }
    static get setYear(){
        return cy.get('.react-datepicker__year-select');
    }
    static get setMonth(){
        return cy.get('.react-datepicker__month-select');
    }
    static get setDate(){
        return cy.get('[class="react-datepicker__month"]').get('.react-datepicker__day').not(".react-datepicker__day--outside-month");
    }
    static get setSubjectEconomics(){
        return cy.get("[class='subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi css-1hwfws3']");
    }
    static get setHobbyMusic(){
        return cy.get("[for='hobbies-checkbox-3']");
    }
    static get uploadFile(){
        return cy.get('input[type=file]');
    }
    static get setStateNCR(){
        return cy.get("[id='state']");
    }
    static get setCityDELHI(){
        return cy.get("[id='city']");
    }
    static get clickSubmitButton(){
        return cy.get("[type='submit']");
    }
    static get validateInfo(){
        return cy.get("[class='table-responsive']");
    }
    
}