module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING(50),
            unique: true,
            allowNull: false
        },
        pwd: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        contry: {
            type: DataTypes.STRING(20),
            allowNull: false
        }
    }, {
        tableName: 'user',
        underscored: true,
        timestamps: false
    });
};