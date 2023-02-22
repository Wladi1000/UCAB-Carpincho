import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';
import  { TDGI } from './TDGI.js'

export const PE_final_TDGI = sequelize.define('pe_final_tdgi', {
    id_pe_final_tdgi: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    estatus: {
        type: DataTypes.STRING(2),
        allowNull: false
    },
    tipo_mencion: {
        type: DataTypes.CHAR,
        allowNull: false,
        defaultValue: 'N'
    },
    razon_mencion: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    nota_final: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
},
{
    timestamps: false
});

PE_final_TDGI.hasOne(TDGI, {
    foreignKey: 'id_pe_final_tdgi',
    sourceKey: 'id_pe_final_tdgi'
});

TDGI.belongsTo(PE_final_TDGI, {
    foreignKey: 'id_pe_final_tdgi',
    targetId: 'id_pe_final_tdgi'
});