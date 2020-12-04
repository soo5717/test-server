module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Like', {
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