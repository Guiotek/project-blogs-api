const PostCategorySchema = (sequelize, DataTypes) => {
  const PostCategoryTable = sequelize.define('PostCategory', {
   postId:{
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey:true
   },
   categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey:true
   },
  },{
    timestamps: false,
    tableName: 'posts_categories',
    underscored: true
  });

  PostCategoryTable.associate = ({BlogPost, Category}) => {
    BlogPost.belongsToMany(Category, {
    as: 'categories',
    foreignKey: 'post_id',
    otherKey: 'category_id',
    through: PostCategoryTable,
   });
     
   Category.belongsToMany(BlogPost, {
    as: 'category',
    foreignKey: 'category_id',
    otherKey: 'post_id',
    through: PostCategoryTable,
     });
  };


  return PostCategoryTable;
};

module.exports = PostCategorySchema;