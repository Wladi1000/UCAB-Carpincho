import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const Designa_TA = sequelize.define("designa_ta", {
    id_cde: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    id_profesor: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    id_tdg: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    fecha_designacion: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
        allowNull: false
    }
},
{
    timestamps: false
});