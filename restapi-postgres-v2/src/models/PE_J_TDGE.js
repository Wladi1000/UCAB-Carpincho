import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

import { Contiene_Criterios_TDGE_J } from './Contiene_Criterios_TDGE_J.js'

export const PE_J_TDGE = sequelize.define('pe_j_tdge',{
    id_pe_j_tdge: {
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
},{
    timestamps: false
});

PE_J_TDGE.hasOne(Contiene_Criterios_TDGE_J, {
    foreignKey: 'id_pe_j_tdge',
    sourceKey: 'id_pe_j_tdge'
});

Contiene_Criterios_TDGE_J.belongsTo(PE_J_TDGE, {
    foreignKey: 'id_pe_j_tdge',
    targetId: 'id_pe_j_tdge'
});