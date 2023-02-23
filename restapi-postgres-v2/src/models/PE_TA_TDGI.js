import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';
import { Contiene_Criterios_TDGI_TA } from "./Contiene_Criterios_TDGI_TA.js";
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

PE_TA_TDGI.hasOne(Contiene_Criterios_TDGI_TA, {
    foreignKey: 'id_pe_ta_tdgi',
    sourceKey: 'id_pe_ta_tdgi'
});

Contiene_Criterios_TDGI_TA.belongsTo(PE_TA_TDGI, {
    foreignKey: 'id_pe_ta_tdgi',
    targetId: 'id_pe_ta_tdgi'
});