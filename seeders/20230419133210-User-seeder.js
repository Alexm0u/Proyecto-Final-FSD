'use strict';

const bcrypt = require("bcrypt");
const password1 = "123";
const password2 = "456";
const password3 = "123456";
const password4 = bcrypt.hashSync(password1, 10);
const password5 = bcrypt.hashSync(password2, 10);
const password6 = bcrypt.hashSync(password3, 10);


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const usuarios = [];
    usuarios.push({
    id: 1,
    dni: '19869491K',
    name: 'Miguel Herranz',
    phone: 617301369,
    email: 'miguel@gmail.com',
    password: password4,
    comments: 'Empty Field',
    role_id: 2,
    createdAt: new Date(),
    updatedAt: new Date()
    })
    usuarios.push({
      id: 2,
      dni: '19869491K',
      name: 'Jose Miguel Camps',
      phone: 637223858,
      email: 'josemiguel@gmail.com',
      password: password4,
      comments: 'Empty Field',
      role_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
      })
    usuarios.push({
    id: 3,
    dni: '21002926Q',
    name: 'Carmen Piquer',
    phone: 610247149,
    email: 'carmen@gmail.com',
    password: password5,
    comments: 'Empty field',
    role_id: 1,
    createdAt: new Date(),
    updatedAt: new Date()
    })
    usuarios.push({
      id: 4,
      dni: '44522064K',
      name: 'Alexander Moya',
      phone: 648140627,
      email: 'alex@gmail.com',
      password: password6,
      comments: 'Empty field',
      role_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
      })
      usuarios.push({
        id: 5,
        dni: '12345678W',
        name: 'Elsa Tejero',
        phone: 612345678,
        email: 'elsa@gmail.com',
        password: password5,
        comments: 'Empty field',
        role_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
        })
    return queryInterface.bulkInsert('Users', usuarios)
},


async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
