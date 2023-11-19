const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    tableName: 'users',
    underscored: true,
    timestamps: false
  });

  UserTable.associate = (models) => {
    UserTable.hasMany(models.BlogPost, {
      as: 'blog_posts',
      foreignKey: 'userId'
    });
  }

  return UserTable;
};

module.exports = UserSchema;