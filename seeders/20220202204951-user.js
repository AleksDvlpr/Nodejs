'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Kate',
          age: 25,
          profession: 'QA',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'John',
          age: 30,
          profession: 'Manager',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Eddy',
          age: 36,
          profession: 'Programmer',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
