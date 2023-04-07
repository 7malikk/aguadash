/* eslint-disable no-undef */

describe('order', () => {
  it('user can place order', () => {
    // login
    cy.visit('/login');
    cy.findByRole('textbox', { placeholder: /Enter your email/i }).type(
      'malikk@gmail.com'
    );
    cy.findByPlaceholderText(/enter your password/i).type('yourPassword');
    cy.findByRole('button', { name: /login/i }).click();
    // click on orders
    cy.findByRole('link', { name: /orders/i }).click();

    // fill in order form and click order button
    cy.findByRole('textbox', { name: /address:/i }).type(
      '11, Ajiboye Street, Alapere, Ketu'
    );
    cy.findByLabelText(/time:/i).type('17:23');
    cy.findByLabelText(/date:/i).type('2023-04-07');
    cy.findByRole('spinbutton', { name: /bags:/i }).clear();
    cy.findByRole('spinbutton', { name: /bags:/i }).type('12');
    // cy.findByRole('tooltip', { name: /order/i }).click();
    // click pay or go
    //click ongoing orders
    cy.findByRole('button', { name: /ongoing orders6/i }).click();
  });
});
