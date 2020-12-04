module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Like', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        contentId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'like',
        underscored: true,
        timestamps: false
    });
};