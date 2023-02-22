import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';
import { TDGE } from './TDGE.js'

export const PE_final_TDGE = sequelize.define('pe_final_tdge', {
    id_pe_final_tdge: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    estatus: {
        type: DataTypes.STRING(2),
        allowNull: false
    },
    tipo_mecion: {
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
},{
    timestamps: false
});

PE_final_TDGE.hasOne(TDGE, {
    foreignKey: 'id_pe_final_tdge',
    sourceKey: 'id_pe_final_tdge'
});

TDGE.belongsTo(PE_final_TDGE, {
    foreignKey: 'id_pe_final_tdge',
    targetId: 'id_pe_final_tdge'
});