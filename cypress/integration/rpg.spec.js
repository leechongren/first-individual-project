describe("homepage", () => {
    it("should visit the homepage and ", () => {
        cy.visit("http://localhost:3000/")
        cy.get(".intro-text").contains("Welcome to a simple RPG game!")
    })
})