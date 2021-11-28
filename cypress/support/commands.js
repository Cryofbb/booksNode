Cypress.Commands.add("login", (login, password) => {
  cy.contains("Log in").click();
  cy.get("#mail").type(login);
  cy.get("#pass").type(password);
  cy.contains("Submit").click();
});

Cypress.Commands.add("addNewFavorite", (title, description, author) => {
  cy.contains("Add new").click();
  cy.get("#title").type(title);
  cy.get("#description").type(description);
  cy.get("#authors").type(author);
  cy.get("#favorite").click();
  cy.contains("Submit").click();
  cy.contains(author).should("be.visible");
  cy.contains("Delete from favorite").should("be.visible");
});
