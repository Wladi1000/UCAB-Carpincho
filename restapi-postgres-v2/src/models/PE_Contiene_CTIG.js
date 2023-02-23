import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const PE_Contiene_CTIG = sequelize.define("pe_contiene_ctig", {
    id_pe_revisor_ptig: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    id_criterios_rev_tig: {
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
},{
    timestamps: false
});