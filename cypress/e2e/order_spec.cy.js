/* eslint-disable no-undef */

describe('order', () => {
  it('user can place order', () => {
    // login
    cy.visit('/login');
    cy.findByRole('textbox', { placeholder: /Enter your email/i }).type(
      '$username'
    );
    cy.findByPlaceholderText(/enter your password/i).type('$user-password');
    cy.get('.rounded-full').click();
    // click on orders
    cy.findByRole('link', { name: /orders/i }).click();

    // fill in order form and click order button
    cy.findByRole('textbox', { name: /address:/i }).type(
      '11, Ajiboye Street, Alapere, Ketu'
    );
    cy.findByLabelText(/time:/i).type('13:23');
    cy.findByLabelText(/date:/i).type('2023-04-07');
    cy.findByRole('spinbutton', { name: /bags:/i }).clear();
    cy.findByRole('spinbutton', { name: /bags:/i }).type('12');
    // cy.findByRole('tooltip', { name: /order/i }).click();
    // click pay or go
    //click ongoing orders
    cy.findByRole('button', { name: /ongoing orders/i }).click();
  });
});
