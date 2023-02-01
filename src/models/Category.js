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
    timestamps: false,
    tableName: 'categories',
    underscored: true
  });

  // CategoryTable.associate = (models) => {
  //   CategoryTable.hasMany(models.PostCategory, {
  //    foreingKey: 'category_id'
  //   });
  // }
  
  return CategoryTable; 
};

module.exports = CategorySchema;