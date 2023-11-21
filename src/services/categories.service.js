const { Category } = require('../models');

const createNewCategory = async ({ name }) => {
  if (!name) {
    return { status: 400, data: { message: '"name" is required' } };
  }
  const newCategory = await Category.create({ name });

  return { status: 201, data: newCategory }; // de onde eu tiro o id? por conta do autoIncrement ele vem automagicamente?
};

const getAllCategories = async () => {
  const categories = await Category.findAll({
    order: [
      ['id', 'ASC'],
    ],
  });

  return { status: 200, data: categories };
};

const getCategoryById = async (id) => {
  const category = await Category.findOne({
    where: { id },
  });

  if (!category) {
    return { status: 404, data: { message: 'User does not exist' } };
  }

  return { status: 200, data: category };
};

module.exports = {
  createNewCategory,
  getAllCategories,
  getCategoryById,
};