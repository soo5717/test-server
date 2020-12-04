module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Travle', {
        title: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        startDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        endDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        budget: {
            type: DataTypes.DOUBLE,
            allowNull: true
        }
    }, {
        tableName: 'travels',
        underscored: true,
        timestamps: false
    });
};