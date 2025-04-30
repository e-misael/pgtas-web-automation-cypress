const { faker } = require('@faker-js/faker');
const fs = require('fs');

const sharedUserCredentials = {
    email: faker.internet.email(),
    password: faker.internet.password(),
    username: faker.internet.username()
}

const newUser = {
    email: sharedUserCredentials.email,
    password: sharedUserCredentials.password,
    username: sharedUserCredentials.username,
    day: faker.number.int({ min: 1, max: 28 }),
    month: 'March',
    year: faker.number.int({ min: 1990, max: 2000 }).toString(),
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    company: 'Company Name',
    address: faker.location.streetAddress(),
    address2: faker.location.streetAddress(),
    country: 'United States',
    state: faker.location.state(),
    city: faker.location.city(),
    zipcode: faker.location.zipCode(),
    mobileNumber: '00999877765',
    creditCard: {
        name: faker.person.fullName(),
        number: faker.finance.creditCardNumber(),
        cvc: faker.finance.creditCardCVV(),
        expiryMonth: '12',
        expiryYear: '2035'
    }
}

const invalidUser = {
    email: 'invalidMail@abc.com',
    password: faker.internet.password()
}

const duplicatedUser = {
    email: sharedUserCredentials.email,
    password: sharedUserCredentials.password,
    username: sharedUserCredentials.username,
}

const usersData = {
    newUser,
    invalidUser,
    duplicatedUser
}
fs.writeFileSync('cypress/fixtures/usersData.json', JSON.stringify(usersData, null, 2));
