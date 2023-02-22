import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const PE_TA_TDGI = sequelize.define('pe_ta_tdgi', {
    id_PE_TA_TDGI: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    estatus: {
        type: DataTypes.STRING(2),
        allowNull: false
    },
    nota_final: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
});