class SpecPages{
    elements ={
        jobTitle:()=>cy.get('.detail-title'),
        firstName:()=>cy.get('[name="first_name"]'),
        lastName:()=>cy.get('[name="last_name"]'),
        resumeFile:()=>cy.get('[id="document-dropzone-cv"]'),
        loadingResume:()=>cy.get('.resume-upload-working', { timeout: 6000 }),
        resumeLabel:()=>cy.get('.resume-upload-label'),
        coverLetter:()=>cy.get('[id="document-dropzone-cover-letter"]'),
        heardAbout:()=>cy.get('[name="custom_attribute_135389"]'),
        email:()=>cy.get('[name="email"]'),
        phone:()=>cy.get('[name="phone"]'),
        location:()=>cy.get('[name="location"]'),
        available:()=>cy.get('[name="available_from"]'),
        salary:()=>cy.get('[name="salary_expectations"]'),
        germanLevel:()=>cy.get('[name="custom_attribute_2121985"]'),
        englishLevel:()=>cy.get('[name="custom_attribute_2133440"]'),
        privacyCheck:()=>cy.get('[id="privacy-policy-acceptance"]'),
        submitButton:()=>cy.get('[type="submit"]')
    }

    typeName(name){
        this.elements.firstName().type(name);
    }

    typeLastName(lastname){
        this.elements.lastName().type(lastname);
    }

    typeEmail(email){
        this.elements.email().type(email);
    }

    typePhone(phone){
        this.elements.phone().type(phone);
    }

    typeLocation(location){
        this.elements.location().type(location);
    }

    typeHeardAbout(heardabout){
        this.elements.heardAbout().type(heardabout);
    }

    typeExpectedSalary(salary){
        this.elements.salary().type(salary);
    }

    typeAvailable(available){
        this.elements.available().type(available);
    }

    selectGermanLevel(){
        this.elements.germanLevel().select('custom_option_16381');
    }

    selectEnglishLevel(){
        this.elements.englishLevel().select('custom_option_16452');;
    }

    selectFile(filePath){
        this.elements.resumeFile().selectFile(filePath,{ action: 'drag-drop',force: true });
    }

    selectCoverLetter(cLetterPath){
        this.elements.coverLetter().selectFile(cLetterPath,{ action: 'drag-drop',force: true });
    }

    checkPrivacy(){
        this.elements.privacyCheck().check();
    }
   
    clickSubmit(){
        this.elements.submitButton().click();
    }
}
export default new SpecPages();