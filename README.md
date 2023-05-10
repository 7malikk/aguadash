# Aguadash

Aguadash is an e-commerce platform that allows customers to order and receive water at their doorstep and also permits a merchant to manage and update orders placed by customers.

Visit Aguadash [here](https://aguadash.netlify.app/)


## Features

- User registration using Firebase Authentication.
- Ability for users to order water in different quantities(bags).
- Secured payment process with Paystack payment gateway. 
- Order history that displays the user's previous orders.
- Merchant dashboard for managing orders and inventory.

Visit Aguadash Merchant Dashboard [here](https://github.com/7malikk/aguadash/tree/admin)

## Installation

### Requirements
- npm found in [NodeJS](https://nodejs.org/en)
- API Keys - contact the contributors

### Steps
1. Clone the repo
2. Run `npm install` in the project directory using your preferred CLI
3. Run `npm start` in the project directory using your preferred CLI

Enjoy!

## Run Tests

Aguadash has a couple of tests, using react testing library, jest, and Cypress

Note: The following should be done after Step 2 in the Installation Section

#### Integration Tests

Run `npm test` in the project directory 

#### End-To-End Tests

*Note*: You need to have a registered user credentials 

- Navigate to `cypress/e2e/order_spec.cy.js` 
- On lines 8 and 10 replace `$username` and `$password` with your credentials respectively and save.
- Run `npx cypress open` in the project directory 

- Select E2E Testing

![image](https://github.com/7malikk/aguadash/assets/75104021/818d34ec-74a7-45b2-ad10-86a2b378cb7a)

- Select preferred browser for testing

![image](https://github.com/7malikk/aguadash/assets/75104021/50dd23b3-5015-49ff-9b91-a42b498dff3e)

- Select `order_spec.cy.js` 

![image](https://github.com/7malikk/aguadash/assets/75104021/baddc18f-622e-486d-b87c-04ac4b1e8536)


## Contributors

[James](https://github.com/JamesVictor-O)

[Malikk](https://github.com/7malikk)

## License

[MIT](https://choosealicense.com/licenses/mit/)
