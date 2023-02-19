import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const PE_J_TDGI = sequelize.define('pe_j_tdgis', {
    id_PE_J_TDGI: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    estatus: {
        type: DataTypes.STRING(2),
        allowNull: false,
        defaultValue: 'PR'
    },
    nota_final: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
});