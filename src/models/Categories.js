const CategoriesSchema = (sequelize, DataTypes) => {
  const CategoriesTable = sequelize.define('Category', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    tableName: 'categories',
    timestamps: false
  });

  return CategoriesTable;
}

module.exports = CategoriesSchema;