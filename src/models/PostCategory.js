const PostCategorySchema = (sequelize, DataTypes) => {
  const PostCategoryTable = sequelize.define('PostCategory', {
    postId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    categoryId: DataTypes.INTEGER
  }, {
    tableName: 'posts_categories',
    underscored: true,
    timestamps: false
  });

  PostCategoryTable.associate = ({ Category, BlogPost }) => {
    BlogPost.belongsToMany(Category, {
      foreignKey: 'postId',
      as: 'categories',
      otherKey: 'categoryId',
      through: PostCategoryTable
    });

    Category.belongsToMany(BlogPost, {
      foreignKey: 'categoryId',
      as: 'blog_posts',
      otherKey: 'postId',
      through: PostCategoryTable
    });
  };

  return PostCategoryTable;
}

module.exports = PostCategorySchema;