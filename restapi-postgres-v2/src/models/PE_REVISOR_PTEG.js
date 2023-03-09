import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const PE_REVISOR_PTEG = sequelize.define("pe_revisor_pteg", {
    id_pe_revisor_pteg: {
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
    },
    documento: {
        type: DataTypes.BLOB,
        defaultValue: null
    }
},
{
    timestamps: false
});

