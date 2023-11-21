const { PostCategory, BlogPost } = require('../models');
const db = require('../models');
const { postSchema } = require('../utils/postJoiValidation');

const createNewPost = async ({ title, content, categoryIds, userId }) => {
  const t = await db.sequelize.transaction();
  const newPost = { title, content, categoryIds, userId };

  const { error } = postSchema.validate(newPost);
  if (error) return { status: 400, data: { message: 'Some required fields are missing' } };

  try {
    const post = await BlogPost.create({
      ...newPost, updated: new Date(), published: new Date() }, { transaction: t });
    const { dataValues } = post;
    console.log('o que tem no dataValues? =>', dataValues);
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

module.exports = {
  createNewPost,
};