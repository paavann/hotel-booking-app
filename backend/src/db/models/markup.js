import { DataTypes } from "sequelize"
import sequelize from "../../config/dbConfig.js"

const Markup = sequelize.define("Markup", {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    city: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    markup: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
}, {
    tableName: "markups",
    timestamps: false,
})

export default Markup