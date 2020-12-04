module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Expense', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        currency: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        memo: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        category: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        payment: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'expense',
        underscored: true,
        timestamps: false
    });
};