const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('users', {
    display_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },{
    tableName: 'users',
    underscored: true
  });

  UserTable.associate = (models) => {
    UserTable.belongsTo(models.blog_posts, {
     foreingKey: 'userId'
    });
  }

  return UserTable; 
};

module.exports = UserSchema;