const { categoryService } = require('../services');

const createNewCategory = async (req, res) => {
  const { name } = req.body;

  const response = await categoryService.createNewCategory(name);

  return res.status(response.status).json(response.data);
};

const getAllCategories = async (req, res) => {
  const response = await categoryService.getAllCategories();
    
  return res.status(response.status).json(response.data);
};

module.exports = {
  createNewCategory,
  getAllCategories,
};