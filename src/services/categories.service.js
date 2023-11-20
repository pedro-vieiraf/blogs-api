const { Category } = require('../models');

const createNewCategory = async ({ name }) => {
  if (!name) {
    return { status: 400, data: { message: '"name" is required' } };
  }
  const newCategory = await Category.create({ name });
  /* const newCategoryWithId = {
    ...newCategory, // botar id aqui?
  }; */
  return { status: 201, data: { newCategory } }; // de onde eu tiro o id? por conta do autoIncrement ele vem automagicamente?
};

const getAllCategories = async () => {
  const categories = Category.findAll();

  return { status: 200, data: { categories } };
};

module.exports = {
  createNewCategory,
  getAllCategories,
};