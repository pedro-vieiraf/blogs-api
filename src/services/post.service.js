const { PostCategory, BlogPost, User, Category } = require('../models');
const db = require('../models');
const { postSchema, postUpdateSchema } = require('../utils/postJoiValidation');

const createNewPost = async ({ title, content, categoryIds, userId }) => {
  const t = await db.sequelize.transaction();
  const newPost = { title, content, categoryIds, userId };

  const { error } = postSchema.validate(newPost);
  if (error) return { status: 400, data: { message: 'Some required fields are missing' } };

  try {
    const post = await BlogPost.create({
      ...newPost, updated: new Date(), published: new Date() }, { transaction: t });
    const { dataValues } = post;

    const postCategoriesPromises = categoryIds.map((categoryId) => 
      PostCategory.create({ postId: dataValues.id, categoryId }, { transaction: t }));
    await Promise.all(postCategoriesPromises);

    await t.commit();
    return { status: 201, data: dataValues };
  } catch (err) {
    await t.rollback();
    return { status: 400, data: { message: 'one or more "categoryIds" not found' } };
  }
};

const getAllPost = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return { status: 200, data: posts };
};

const getPostById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!post) {
    return { status: 404, data: { message: 'Post does not exist' } };
  }
    
  return { status: 200, data: post };
};

const updatePost = async ({ postId, userId, title, content }) => {
  const post = await BlogPost.findByPk(postId);
  if (!post) {
    return { status: 404, data: { message: 'Post does not exist' } };
  }
  if (post.userId !== userId) {
    return { status: 401, data: { message: 'Unauthorized user' } };
  }
  const { error } = postUpdateSchema.validate({ title, content });
  if (error) return { status: 400, data: { message: 'Some required fields are missing' } };
  await BlogPost.update({ title, content }, { where: { id: postId } });
  const updatedPost = await BlogPost.findByPk(
    postId, 
    { include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ] },
  );
  return { status: 200, data: updatedPost };
};

module.exports = {
  createNewPost,
  getAllPost,
  getPostById,
  updatePost,
};