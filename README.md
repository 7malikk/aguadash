# Aguadash Admin

Aguadash is an e-commerce platform that allows customers to order and receive water at their doorstep and also permits a merchant to manage and update orders placed by customers.

Visit [Aguadash Merchant](https://admin-aguadash.netlify.app/)

## Features
- View all users' orders
- Update order status to processing, delivered, and/or in transit.
- Set product stock status
- Set current sale rates per bag
- View statistics of orders and users

### Post MVP Features
- Realtime delivery tracking

## Installation

### Requirements
- npm found in [NodeJS](https://nodejs.org/en)
- API Keys - contact the contributors
- Admin credentials - contact the contributors

### Steps
1. Clone the repo and checkout to the `admin` branch
2. Run `npm install` in the project directory using your preferred CLI
3. Run `npm start` in the project directory using your preferred CLI

Enjoy!

## Run Tests

Aguadash Admin has a couple of tests, using react testing library, jest, and cypress

The following should be done after Step 2 in the Installation Section

#### Run Integration Tests

Run `npm test` in the project directory 

#### Run End-To-End Tests

*Note*: You need to have an admin credentials 

- Navigate to `cypress/e2e/updateOrder.spec.cy.js` 
- On lines 6 and 7 replace `$admin-email'` and `$admin-password` with an admin credentials respectively and save.
- Run `npx cypress open` in the project directory 

- Select E2E Testing

![image](https://github.com/7malikk/aguadash/assets/75104021/6121a6ee-90db-4b17-92b0-64e15ce9fdca)

- Select preferred browser for testing

![image](https://github.com/7malikk/aguadash/assets/75104021/d0dff5ab-b37e-4c87-aa90-6666bbd6cc2d)

- Select `updateOrder.spec.cy.js` 

![image](https://github.com/7malikk/aguadash/assets/75104021/672cc2d7-9bda-4b4e-a6e7-b156e7414e1e)

## Contributors

[James](https://github.com/JamesVictor-O)

[Malikk](https://github.com/7malikk)

## License

[MIT](https://choosealicense.com/licenses/mit/)
