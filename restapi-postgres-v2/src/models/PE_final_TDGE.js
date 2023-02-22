import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const PE_final_TDGI = sequelize.define('pe_final_tdge', {
    id_PE_final_TDGE: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    estatus: {
        type: DataTypes.STRING(2),
        allowNull: false
    },
    tipo_mecion: {
        type: DataTypes.CHAR,
        allowNull: false,
        defaultValue: 'N'
    },
    razon_mencion: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    nota_final: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
});