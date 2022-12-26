
describe('My First Test', () => {
  it('test1', () => {
    cy.visit('https://www.facebook.com/')
    cy.title().should('eq','Facebook')
    cy.xpath("//button[@title='Only allow essential cookies']").click()
    cy.wait(2000)
  })

  it('test2', () => {
    cy.visit('https://www.google.com/')
    //cy.get('#Form_getForm_Country').select('Bolivia').should('have.value','Bolivia')

    
    
  })
})