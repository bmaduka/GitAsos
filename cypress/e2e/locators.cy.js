
describe('locatorsTest', () => {
    it('cssLocators', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.visit('https://www.asos.com/')
        cy.url().should('contain','asos.com')

        //accept cookie pop-up
        cy.get("#onetrust-accept-btn-handler").should('be.visible').click()

        // input data in search bar + enter key
        cy.get("#chrome-search").type('Mens shoes{enter}')

        //click required product and select size
        cy.xpath("//h2[text()='Crocs classic clogs in black']").click()
        cy.get("#main-size-select-0").select('UK 11')

        // add item to basket
        cy.xpath("//span[text()='Add to bag']").click()

        // hover and view items in basket 
        cy.get("button[data-testid='miniBagIcon']").should('exist').trigger('mouseover')
        cy.get("a[data-test-id='bag-link']").click()

        //verify that basket contains selected item
        cy.get("p.bag-item-name").should('have.text','Crocs classic clogs in black')
    })
})