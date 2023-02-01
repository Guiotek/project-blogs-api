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
    timestamps: false,
    tableName: 'blog_posts',
    underscored: true
  });

  BlogTable.associate = ({User, PostCategory}) => {
     BlogTable.belongsTo(User, {
      foreingKey: 'userId', as: 'user'
     });

    //  BlogTable.hasMany(PostCategory, {
    //   foreingKey: 'post_id'
    //  });
  }


  return BlogTable;
};

module.exports = BlogSchema;