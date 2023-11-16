'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('blogPosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        // onDelete: CASCADE/RESTRICT,  // não entendi muito bem
        // onUpdate: onoo,
      },
      published: {
        allowNull: false,
        type: Sequelize.DATETIME
      },
      updated: {
        allowNull: false,
        type: Sequelize.DATETIME
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('blogPosts');
  }
};