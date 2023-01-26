const BlogSchema = (sequelize, DataTypes) => {
  const BlogTable = sequelize.define('blog_posts', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATETIME,
    updated: DataTypes.DATETIME,
  },{
    tableName: 'users',
    underscored: true
  });

  BlogTable.associate = (models) => {
     BlogTable.hasOne(models.user, {
      foreingKey: 'userId', as: 'user_id'
     })
  }


  return UserTable; 
};

module.exports = BlogSchema;