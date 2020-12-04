module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Travle', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
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
        tableName: 'travel',
        underscored: true,
        timestamps: false
    });
};