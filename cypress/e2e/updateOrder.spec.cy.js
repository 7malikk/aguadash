/* eslint-disable no-undef */
describe('admin core functionalities', () => {
  it('admin can update order status', () => {
    cy.visit('/');
    // login
    cy.findByPlaceholderText(/enter your email/i).type('$admin-email');
    cy.findByPlaceholderText(/enter your password/i).type('$admin-password');
    cy.findByRole('button', {
      name: /login/i,
    }).click();
    //click on orders
    cy.findByRole('link', { name: /orders/i }).click();
    // update status to from processing to in transit
    cy.findAllByTestId(['select']).first().select('In Transit');
    // click on in transit and update status to delivered
    cy.findByRole('button', {
      name: /in transit/i,
    }).click();
    cy.findAllByTestId(['select']).first().select('Delivered');
    //click on history
    cy.findByRole('link', { name: /history/i }).click();
    //click on settings
    cy.findByRole('link', { name: /settings/i }).click();
    //update rate and stock
    cy.findByRole('spinbutton', {
      name: /rate/i,
    }).type('233');
    cy.findByText(/no/i).click();
    cy.findByRole('button', {
      name: /update/i,
    }).click();
    //go back to overview
    cy.findByRole('link', { name: /overview/i }).click();
  });
});
