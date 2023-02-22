import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const PTG = sequelize.define("ptg", {
    id_ptg: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    fecha_entrega: {
        type: DataTypes.DATE,
        defaultValue: null,
        allowNull: true
    },
    estatus: {
        type: DataTypes.STRING(2),
        allowNull: false,
        defaultValue: 'PC'
    }
},
{
    timestamps: false
});