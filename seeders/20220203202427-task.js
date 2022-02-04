'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Tasks',
      [
        {
          name: 'Task 1',
          description: 'Description Task 1',
          user_id: 1,
          project_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Task 2',
          description: 'Description Task 2',
          user_id: 2,
          project_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Task 3',
          description: 'Description Task 3',
          user_id: 3,
          project_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tasks', null, {});
  },
};
