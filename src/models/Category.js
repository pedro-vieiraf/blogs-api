const CategorySchema = (sequelize, DataTypes) => {
  const CategoryTable = sequelize.define('Category', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING
  }, {
    tableName: 'categories',
    timestamps: false
  });

  return CategoryTable;
}

module.exports = CategorySchema;