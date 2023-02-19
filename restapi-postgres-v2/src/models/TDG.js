import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const TDG = sequelize.define("tdg", {
    id_TDG: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    fecha_entrega: {
        type: DataTypes.DATE,
        defaultValue: null,
        allowNull: true
    },
    hora_presentacion: {
        type: DataTypes.TIME,
        allowNull: true
    },
    estatus: {
        type: DataTypes.STRING(2),
        allowNull: false,
        defaultValue: 'PC'
    }
});