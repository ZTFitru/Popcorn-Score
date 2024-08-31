describe('template spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: 'movies'
    }).as('getMovies')
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

  it('Should navigate from details page to video page', ()=> {
    cy.wait('@getMovies')
    cy.get('.movie-list > [href="#/movies/436281"] > img').click()
    cy.url().should('include', 'movies/436281')

    cy.get('button').click()
    cy.wait('@getMovies')
    .url().should('include', '/436281/videos')
    
  })

  it('should check if iframe is displayed', ()=> {
    cy.wait('@getMovies')
    .get('.movie-list > [href="#/movies/436281"] > img').click()
    cy.wait('@getSingleMovie')
    .url().should('include', 'movies/436281')
    cy.get('button').click()
    cy.wait('@getVideos')
    .url().should('include', 'movies/436281/videos')
    .get('.trailer > :nth-child(1) > h1').contains('h1', 'Trailer')
    .get('.trailer-cont').should('exist')
    .get('.trailer').should('exist')
    .get(':nth-child(1) > iframe').should('exist')
    cy.get(':nth-child(1) > iframe').should('have.attr', 'src').and('include', 'youtube.com/embed/a1b2c3d4e5')
    cy.get('.navbar > a > img').click()
    .url().should('include', '/')
  })
})