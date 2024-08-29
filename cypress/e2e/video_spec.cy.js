describe('template spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: 'movies'
    }).as('getMovies')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436281', {
      statusCode: 200,
      fixture: 'singleMovie'
    })
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436281/videos', {
      statusCode: 200,
      fixture: 'movieVideo'
    }).as('getMovies')

    cy.visit('http://localhost:3000/')
  });

  it('Should navigate to videos page', ()=> {
    cy.wait('@getMovies')
    .get('[href="/movies/436281"] > img').should('exist').click()
    .url().should('include', '/436281')

    .get('button').should('exist').click()
    .url().should('include', '/436281/videos')
    .get('.trailer > :nth-child(1) > h1').contains('h1', 'Trailer')
    .get('.trailer-cont').should('exist')
    .get('.trailer').should('exist')
  })
})