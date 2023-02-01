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
    timestamps: false,
    tableName: 'users',
    underscored: true
  });

  UserTable.associate = (models) => {
    UserTable.hasMany(models.BlogPost, {
     foreingKey: 'userId', as: 'user'
    });
  }

  return UserTable; 
};

module.exports = UserSchema;