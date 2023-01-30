const BlogSchema = (sequelize, DataTypes) => {
  const BlogTable = sequelize.define('blog_posts', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },{
    tableName: 'users',
    underscored: true
  });

  BlogTable.associate = (models) => {
     BlogTable.hasOne(models.User, {
      foreingKey: 'userId', as: 'user_id'
     })
  }

  return BlogTable;
};

module.exports = BlogSchema;