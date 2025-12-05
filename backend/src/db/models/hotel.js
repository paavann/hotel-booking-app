import { DataTypes } from "sequelize"
import sequelize from "../../config/dbConfig.js"

const Hotel = sequelize.define('Hotel', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    basePrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    }, 
}, {
    tableName: 'hotels',
    timestamps: false,
})

export default Hotel