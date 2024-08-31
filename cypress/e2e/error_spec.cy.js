describe('landing page spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 400
    });

    cy.visit('http://localhost:3000/')
  });

  it('should display error handling message ', ()=> {
    cy.get('h1').contains('h1', 'POPCORN SCORE')
    cy.get('.error-message').contains('Sorry something went wrong, please try again!')
  });

  
})