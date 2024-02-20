const { faker } = require('@faker-js/faker');
const db = require("../utils/database")
const { User } = require("../models");
const initModels = require("../models/initModels");

initModels();


db.sync({force: true}).then(async () => {
    console.log('Seed syncronized');
     for (let index = 0; index < 10; index++) {
    const user = {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        name: faker.person.firstName(),
        lastName: faker.person.lastName(),
        profileImg: faker.image.avatar(),
    }
    await User.create(user)
    }
})
