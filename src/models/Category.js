const CategorySchema = (sequelize, DataTypes) => {
  const CategoryTable = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
  },{
    tableName: 'categories',
    underscored: true
  });
  
  return CategoryTable; 
};

module.exports = CategorySchema;