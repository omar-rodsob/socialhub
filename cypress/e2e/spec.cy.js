import SpecPage from './pages/specPage';
import user from '../fixtures/user.json';
import specPage from './pages/specPage';

describe('template spec', () => {
  it('passes', () => {
   cy.visit('');
   cy.wait(3000);
   SpecPage.elements.jobTitle().contains('Quality Assurance Engineer (all genders)');
   SpecPage.elements.submitButton().should('be.disabled');
   SpecPage.typeName(user.firstName);
   SpecPage.typeLastName(user.lastName);
   SpecPage.typeEmail(user.email);
   SpecPage.typePhone(user.phone);
   SpecPage.typeLocation(user.location);
   SpecPage.typeExpectedSalary(user.salary);
   SpecPage.typeAvailable(user.available);
   SpecPage.typeHeardAbout(user.heardabout);
   SpecPage.selectGermanLevel();
   SpecPage.selectEnglishLevel(); 
   SpecPage.selectFile('cypress/fixtures/OmarRodriguez-Resume.pdf');
   cy.wait(3000);
   SpecPage.selectCoverLetter('cypress/fixtures/CoverLetter.pdf');
   cy.wait(3000);
   SpecPage.checkPrivacy();
   SpecPage.elements.submitButton().should('not.be.disabled');
   SpecPage.clickSubmit();
  })
})