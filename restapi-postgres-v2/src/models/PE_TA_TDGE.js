import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';
import { PE_final_TDGE } from "./PE_final_TDGE.js";

export const PE_TA_TDGE = sequelize.define('pe_ta_tdge',{
    id_pe_ta_tdge: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    estatus: {
        type: DataTypes.STRING(2),
        allowNull: false,
        defaultValue: 'NR'
    },
    nota_final: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
},
{
    timestamps: false
});

PE_TA_TDGE.hasOne(PE_final_TDGE, {
    foreignKey: 'id_pe_ta_tdge',
    sourceKey: 'id_pe_ta_tdge',
    foreignKey: null
});

PE_final_TDGE.belongsTo(PE_TA_TDGE, {
    foreignKey: 'id_pe_ta_tdge',
    targetId: 'id_pe_ta_tdge'
});