import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';
import { PE_TA_TDGI } from "./PE_TA_TDGI.js";
import { Contiene_PE_TE_TDGI } from './Contiene_PE_TE_TDGI.js'
import { Contiene_Criterios_TDGI_TE } from "./Contiene_Criterios_TDGI_TE.js";

export const PE_TE_TDGI = sequelize.define('pe_te_tdgi',{
    id_pe_te_tdgi: {
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
        allowNull: true,
        defaultValue: null
    }
},
{
    timestamps: false
});

PE_TE_TDGI.hasOne(PE_TA_TDGI, {
    foreignKey: 'id_pe_te_tdgi',
    sourceKey: 'id_pe_te_tdgi'
});

PE_TA_TDGI.belongsTo(PE_TE_TDGI, {
    foreignKey: 'id_pe_te_tdgi',
    targetId: 'id_pe_te_tdgi'
});

PE_TE_TDGI.hasOne(Contiene_PE_TE_TDGI, {
    foreignKey: 'id_pe_te_tdgi',
    sourceKey: 'id_pe_te_tdgi',
});

Contiene_PE_TE_TDGI.belongsTo(PE_TE_TDGI, {
    foreignKey: 'id_pe_te_tdgi',
    targetId: 'id_pe_te_tdgi'
});

PE_TE_TDGI.hasOne(Contiene_Criterios_TDGI_TE, {
    foreignKey: 'id_pe_te_tdgi',
    sourceKey: 'id_pe_te_tdgi'
});

Contiene_Criterios_TDGI_TE.belongsTo(PE_TE_TDGI, {
    foreignKey: 'id_pe_te_tdgi',
    targetId: 'id_pe_te_tdgi'
});