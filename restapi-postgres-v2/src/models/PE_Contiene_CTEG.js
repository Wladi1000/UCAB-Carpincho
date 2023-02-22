import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const PE_Contiene_CTEG = sequelize.define("pe_contiene_cteg", {
    id_pe_revisor_pteg: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    id_criterios_rev_teg: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    aprobacion: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    nota: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
});