const { BasePage } = require("../../pageObjects/BasePage");
const { RegistrationPage } = require("../../pageObjects/RegistrationPage");

describe("FinalWork", () => { 
    context("Student Registration Form", () => {
        it("Enter student registration form values", () => {
            RegistrationPage.visit();

            RegistrationPage.setFirstName.type("Imants");
            RegistrationPage.setLastName.type("Kviesis");
            RegistrationPage.setEmail.type("ImantsKviesis@email.com");
            RegistrationPage.setGenderMale.click();
            RegistrationPage.setPhoneNumber.type("4204206969");
            
            RegistrationPage.openCalendar.click();
            RegistrationPage.selectYear.should('be.visible').click();
            RegistrationPage.setYear.select('1930');
            RegistrationPage.setMonth.select('1');
            RegistrationPage.setDate.contains("28").click();

            RegistrationPage.setSubjectEconomics.click().type("Economics{enter}");
            
            RegistrationPage.setHobbyMusic.click();

            RegistrationPage.uploadFile.selectFile({
                contents: Cypress.Buffer.from('files'),
                fileName: 'file.jpg',
                mimeType: 'text/plain',
                lastModified: Date.now(),
              })
            
            RegistrationPage.setStateNCR.click().type("NCR{enter}");
            RegistrationPage.setCityDELHI.click().type("Delhi{enter}");
            RegistrationPage.clickSubmitButton.click();

            RegistrationPage.validateInfo.contains("Imants").contains("Kviesis");
            RegistrationPage.validateInfo.contains("ImantsKviesis@email.com");
            RegistrationPage.validateInfo.contains("4204206969");
            RegistrationPage.validateInfo.contains("28 February,1930");
            RegistrationPage.validateInfo.contains("Economics");
            RegistrationPage.validateInfo.contains("Music");
            RegistrationPage.validateInfo.contains("file.jpg");
            RegistrationPage.validateInfo.contains("NCR");
            RegistrationPage.validateInfo.contains("Delhi");
        });
    });
});