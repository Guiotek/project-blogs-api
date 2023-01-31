const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },{
    tableName: 'users',
    underscored: true
  });

  UserTable.associate = (models) => {
    UserTable.hasMany(models.BlogPost, {
     foreingKey: 'user_Id'
    });
  }

  return UserTable; 
};

module.exports = UserSchema;