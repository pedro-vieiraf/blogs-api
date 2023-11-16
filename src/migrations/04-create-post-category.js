'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('posts_categories', {
      postId: {
        type: Sequelize.INTEGER,
        field: 'post_id',
        references: {
          model: 'blogPosts',
          key: 'id'
        },
        // onDelete: CASCADE/RESTRICT,  // não entendi muito bem
        // onUpdate: onoo,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        field: 'category_id',
        references: {
          model: 'categories',
          key: 'id'
        },
        // onDelete: CASCADE/RESTRICT,  // não entendi muito bem
        // onUpdate: onoo,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('posts_categories');
  }
};