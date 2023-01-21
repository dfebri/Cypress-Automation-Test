describe('Tugas18Cypress', () => {

  it('positive_login', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa-sign-in').click()
  })
  
  it('negative_login', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmithh')
    cy.get('#password').type('SuperSecretPassword')
    cy.get('.fa-sign-in').click()
  })
})