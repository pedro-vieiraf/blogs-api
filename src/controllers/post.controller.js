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

const getPostById = async (req, res) => {
  const { id } = req.params;

  const response = await postService.getPostById(id);

  return res.status(response.status).json(response.data);
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { user } = req;
  console.log('user!!! =>', user);
  const response = await postService.updatePost({ postId: id, userId: user.id, ...req.body });

  return res.status(response.status).json(response.data);
};

module.exports = {
  createNewPost,
  getAllPost,
  getPostById,
  updatePost,
};