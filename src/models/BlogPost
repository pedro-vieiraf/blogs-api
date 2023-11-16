const BlogPostSchema = (sequelize, DataTypes) => {
  const BlogPostTable = sequelize.define('BlogPost', {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATETIME,
    updated: DataTypes.DATETIME,
  }, {
    tableName: 'blogPosts',
    underscored: true,
    timestamps: false
  });

  return BlogPostTable
};

module.exports = BlogPostSchema;