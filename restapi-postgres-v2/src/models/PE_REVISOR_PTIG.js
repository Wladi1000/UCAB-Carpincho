import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';
import { PE_Contiene_CTIG } from "./PE_Contiene_CTIG.js";

export const PE_REVISOR_PTIG = sequelize.define("pe_revisor_ptig", {
    id_pe_revisor_ptig: {
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

PE_REVISOR_PTIG.hasOne(PE_Contiene_CTIG, {
    foreignKey: 'id_pe_revisor_ptig',
    sourceKey: 'id_pe_revisor_ptig'
});

PE_Contiene_CTIG.belongsTo(PE_REVISOR_PTIG, {
    foreignKey: 'id_pe_revisor_ptig',
    targetId: 'id_pe_revisor_ptig'
});