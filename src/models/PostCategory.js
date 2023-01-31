const PostCategorySchema = (sequelize, DataTypes) => {
  const PostCategoryTable = sequelize.define('PostCategory', {
   postId:{
    type: DataTypes.INTEGER,
    allowNull: false,
   },
   categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
   },
  },{
    tableName: 'post_categories',
    underscored: true
  });

  PostCategoryTable.associate = ({BlogPost, Category}) => {
    BlogPost.belongsToMany(Category, {
      foreingKey: 'postId',
      otherKey: 'categoryId',
      through: PostCategoryTable,
     });

     Category.belongsToMany(BlogPost, {
      foreingKey: 'categoryId',
      otherKey: 'postId',
      through: PostCategoryTable,
     });

  };


  return PostCategoryTable;
};

module.exports = PostCategorySchema;