import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const PE_REVISOR_PTIG = sequelize.define("pe_revisor_ptig", {
    id_PE_REVISOR_PTIG: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    desicion_final: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    fecha_llenado: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
    }
});