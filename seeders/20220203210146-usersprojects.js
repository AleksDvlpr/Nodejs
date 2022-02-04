'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Usersprojects',
      [
        {
          user_id: 1,
          project_id: 2,
        },
        {
          user_id: 2,
          project_id: 2,
        },
        {
          user_id: 3,
          project_id: 1,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Usersprojects', null, {});
  },
};
