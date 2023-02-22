import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';
import { PE_final_TDGI } from "./PE_final_TDGI.js";

export const PE_TA_TDGI = sequelize.define('pe_ta_tdgi', {
    id_pe_ta_tdgi: {
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
},
{
    timestamps: false
});

PE_TA_TDGI.hasOne(PE_final_TDGI, {
    foreignKey: 'id_pe_ta_tdgi',
    sourceKey: 'id_pe_ta_tdgi',
    allowNull: true
});

PE_final_TDGI.belongsTo(PE_TA_TDGI, {
    foreignKey: 'id_pe_ta_tdgi',
    targetId: 'id_pe_ta_tdgi'
});