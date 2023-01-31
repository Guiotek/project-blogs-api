const BlogSchema = (sequelize, DataTypes) => {
  const BlogTable = sequelize.define('BlogPost', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },{
    tableName: 'blog_posts',
    underscored: true
  });

  BlogTable.associate = (models) => {
     BlogTable.belongsTo(models.User, {
      foreingKey: 'userId', as: 'user_id'
     })
  }

  BlogTable.associate = (models) => {
    BlogTable.hasMany(models.PostCategory, {
     foreingKey: 'postId'
    });
  }

  return BlogTable;
};

module.exports = BlogSchema;