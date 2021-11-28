beforeEach(() => {
  cy.visit("/");
});

it.skip("Should open the main page", () => {
  cy.contains("Books list");
});

it.skip("Should login with correct name/pass", () => {
  cy.contains("Log in").click();
  cy.get("#mail").type("bropet@mail.ru");
  cy.get("#pass").type("123");
  cy.contains("Submit").click();
  cy.contains("Добро пожаловать");
});

it.skip("Should not login without pass", () => {
  cy.contains("Log in").click();
  cy.get("#mail").type("bropet@mail.ru");
  cy.contains("Submit").click();
  cy.get("#pass")
    .then(($el) => $el[0].checkValidity())
    .should("be.false");
});

it.skip("Should not login without name", () => {
  cy.contains("Log in").click();
  cy.get("#pass").type("123");
  cy.contains("Submit").click();
  cy.get("#mail")
    .then(($el) => $el[0].checkValidity())
    .should("be.false");
});

describe.only("Homework", () => {
  beforeEach(() => {
    cy.login("test@test.com", "test");
    cy.contains("Добро пожаловать").should("be.visible");
  });

  it("Should add new book to favorite", () => {
    cy.addNewFavorite(
      "Как перестать срываться на детей",
      "Воспитание без стресса, истерик и чувства вины",
      "Карла Наумбург"
    );
  });

  it("Should delete book from favorite", () => {
    cy.addNewFavorite(
      "Барсук",
      "Скандинавский детективный триллер",
      "Фредерик Винтерфелко"
    );
    cy.contains("Delete from favorite").click();
    cy.contains("Add to favorite").should("be.visible");
  });

  it("Should add book to favorite", () => {
    cy.addNewFavorite(
      "Дизайн пользовательского опыта",
      "Как создать продукт, который ждут",
      "Джон Маклейко"
    );
    cy.contains("Delete from favorite").click();
    cy.contains("Add to favorite").click();
    cy.contains("Delete from favorite").should("be.visible");
  });
});
