describe('Grocery app', function () {

  beforeEach(function () {
    cy.request('POST', 'http://localhost:3001/api/testing/reset')
    const user = {
      username: 'root',
      email: 'email@email.com',
      password: 'password'
    }
    cy.request('POST', 'http://localhost:3001/api/users/', user)
    cy.visit('http://localhost:3000')
  })

  it('front page can be opened', function () {
    cy.visit('http://localhost:3000')
    cy.contains('Groceryio')
  })

  it('login fails with wrong password', function () {
    cy.contains('Login').click()
    cy.get('#username').type('root')
    cy.get('#password').type('wrongpassword')
    cy.get('#login-submit').click()

    cy.get('.message')
      .should('contain', 'Wrong credentials')
      .and('have.css', 'color', 'rgb(255, 0, 0)')
  })

  it('user can login', function () {
    cy.contains('Login').click()
    cy.get('#username').type('root')
    cy.get('#password').type('password')
    cy.get('#login-submit').click()

    cy.contains('Logout')
  })

  describe('when logged in', function () {
    beforeEach(function () {
      cy.login({ username: 'root', password: 'password' })
    })

    it('can add new product', function () {
      cy.contains('Add Product').click()
      cy.get('#new-product-input').type('unique')
      cy.contains('Save').click()
      cy.contains('UNIQUE')
    })
  })

})