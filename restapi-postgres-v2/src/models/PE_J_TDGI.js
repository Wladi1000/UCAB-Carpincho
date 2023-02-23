import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';
import { Contiene_Criterios_TDGI_J } from "./Contiene_Criterios_TDGI_J.js";
import { Contiene_PE_TE_TDGI } from "./Contiene_PE_TE_TDGI.js";

export const PE_J_TDGI = sequelize.define('pe_j_tdgi', {
    id_pe_j_tdgi: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    estatus: {
        type: DataTypes.STRING(2),
        allowNull: false,
        defaultValue: 'PR'
    },
    nota_final: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null
    }
},{
    timestamps: false
});

PE_J_TDGI.hasOne(Contiene_PE_TE_TDGI, {
    foreignKey: 'id_pe_j_tdgi',
    sourceKey: 'id_pe_j_tdgi',
});

Contiene_PE_TE_TDGI.belongsTo(PE_J_TDGI, {
    foreignKey: 'id_pe_j_tdgi',
    targetId: 'id_pe_j_tdgi'
});

PE_J_TDGI.hasOne(Contiene_Criterios_TDGI_J, {
    foreignKey: 'id_pe_j_tdgi',
    sourceKey: 'id_pe_j_tdgi',
});

Contiene_Criterios_TDGI_J.belongsTo(PE_J_TDGI, {
    foreignKey: 'id_pe_j_tdgi',
    targetId: 'id_pe_j_tdgi'
});