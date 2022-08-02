'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: "Jeremia",
        profession: "Admin Micro",
        role: "admin",
        email: "jeremia@example.com",
        password: await bcrypt.hash('12345678', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Edwin",
        profession: "Admin DB",
        role: "student",
        email: "edwin@example.com",
        password: await bcrypt.hash('12345678', 10),
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
