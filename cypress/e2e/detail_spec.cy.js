describe('details page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: 'movies'
    }).as('getMovie')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436281', {
      statusCode: 200,
      fixture: 'singleMovie'
    }).as('getSingleMovie')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436281/videos', {
      statusCode: 200,
      fixture: 'movieVideo'
    }).as('getVideos')

    cy.visit('http://localhost:3000/')
  });

  it('Should navigate to details page', ()=> {
    cy.wait('@getMovie')
    cy.get('.movie-list > [href="#/movies/436281"] > img').click()
    cy.wait('@getSingleMovie')
    .url().should('include', 'movies/436281')
    .get('.movies > img').should('be.visible')
    
    .get('h2').contains('h2', 'Rush Hour 2')
    .get('p').contains('p', 'Rating:')
    .get('p').contains('p', 'Overview:')
    .get('p').contains('p', 'Genre:')
    .get('p').contains('p', 'Release Date:')
    .get('p').contains('p', 'Runtime:')
    .get('p').contains('p', 'Tagline:')

  });
  it('should navigate to video page after button clicked', ()=> {
    cy.wait('@getMovie')
    .get('.movie-list > [href="#/movies/436281"] > img').click()
    cy.wait('@getSingleMovie')
    .url().should('include', 'movies/436281')
  })

})