describe('landing page spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: 'movies'
    }).as('getMovies')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436281', {
      statusCode: 200,
      fixture: 'singleMovie'
    }).as('getDetails')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436281/videos', {
      statusCode: 200,
      fixture: 'movieVideo'
    }).as('getVideos')
    

    cy.visit('http://localhost:3000/')
  });

  it('should display the application title ', ()=> {
    cy.get('h1').contains('h1', 'POPCORN SCORE')
  })
  it('should display all movies and have a search bar that filters movies', ()=> {
    cy.wait('@getMovies')
    .get('.movie-list').children().should('have.length', 4)
    .get('.movie-list').contains('Rush Hour 2').should('exist')
    .get('.movie-list').contains('Blue Streak').should('exist')
    .get('.movie-list').contains('Scary Movie').should('exist')
    .get('.movie-list').contains('Big Daddy').should('exist')

    .get('.input-search').type('Rush Hour 2')
    .get('.movie-list').children().should('have.length', 1)
    .get('.movie-list').contains('Rush Hour 2').should('exist')
    .get('.movie-list').contains('Batman').should('not.exist')

    .get('.input-search').clear()
    .get('.movie-list').children().should('have.length', 4)
    .get('.movie-list').contains('Scary Movie').should('exist')
    .get('.movie-list').contains('Hard Ball').should('not.exist')

    .get('.input-search').type('Daddy Day Camp')
    .get('.no-movie-message').should('be.visible').and('contain', 'We aint got the movie....try again')
  })

  it('should navigate to details page when clicked', ()=> {
    
    cy.get('[href="/movies/436281"] > img').click()
    cy.wait('@getDetails')
    .url().should('include', '/436281')
    
  })

  

})