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
  });

  it('should have a random array of 5 movies and 5 titles', () => {
    cy.wait('@getMovies')
    .get('.container').children().should('have.length', 10)
    .get('.container').contains('Rush Hour 2').should('exist')
    .get('.container').contains('Blue Streak').should('exist')
    .get('.container').contains('Scary Movie').should('exist')
    .get('.container').contains('Big Daddy').should('exist')
    .get('.container').contains('Daddy Day Camp').should('exist')
  });

  it('should go to detail page when image and carousel is clicked', () => {
    const testMovie = 'Rush Hour 2'
    cy.contains('.random-movie-title', testMovie).parents('.container').find('img.random-movie-img').click({force: true})
  });

  it('should display all movies and have a search bar that filters movies', ()=> {
    cy.wait('@getMovies')
    .get('.movie-list').children().should('have.length', 5)
    .get('.movie-list').contains('Rush Hour 2').should('exist')
    .get('.movie-list').contains('Blue Streak').should('exist')
    .get('.movie-list').contains('Scary Movie').should('exist')
    .get('.movie-list').contains('Big Daddy').should('exist')
    .get('.movie-list').contains('Daddy Day Camp').should('exist')

    .get('.input-search').type('Rush Hour 2')
    .get('.movie-list').children().should('have.length', 1)
    .get('.movie-list').contains('Rush Hour 2').should('exist')
    .get('.movie-list').contains('Batman').should('not.exist')
    .get('.input-search').clear()

    .get('.movie-list').children().should('have.length', 5)
    .get('.movie-list').contains('Scary Movie').should('exist')
    .get('.movie-list').contains('Hard Ball').should('not.exist')
    .get('.input-search').type('Superman')
    .get('.no-movie-message').should('be.visible').and('contain', "Sorry, can't find that movie.")
  });

  it('should navigate to details page when clicked', ()=> {
    cy.get('.movie-list > [href="/movies/436281"] > img').click()
    cy.wait('@getDetails')
    .url().should('include', '/436281')
  });
})