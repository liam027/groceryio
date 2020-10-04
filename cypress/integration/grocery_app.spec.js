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

  it('user can login', function () {
    cy.visit('http://localhost:3000')
    cy.contains('Login').click()

    cy.get('#username').type('root')
    cy.get('#password').type('password')
    cy.get('#login-submit').click()

    cy.contains('Logout')
  })

  describe('when logged in', function () {
    beforeEach(function () {
      cy.visit('http://localhost:3000')
      cy.contains('Login').click()

      cy.get('#username').type('root')
      cy.get('#password').type('password')
      cy.get('#login-submit').click()
    })

    it('can add new product', function () {
      cy.contains('Add Product').click()
      cy.get('#new-product-input').type('unique product')
      cy.contains('Save').click()
      cy.contains('UNIQUE PRODUCT')
    })
  })

})