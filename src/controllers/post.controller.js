const { postService } = require('../services');

const createNewPost = async (req, res) => {
  const { user } = req;
  const response = await postService.createNewPost({ ...req.body, userId: user.id });

  return res.status(response.status).json(response.data);
};

const getAllPost = async (req, res) => {
  const response = await postService.getAllPost();

  return res.status(response.status).json(response.data);
};

module.exports = {
  createNewPost,
  getAllPost,
};