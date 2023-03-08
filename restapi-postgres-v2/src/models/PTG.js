import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';
import { TDG } from './TDG.js'
import { Aprueba_Comite } from "./Aprueba_Comite.js";
import { PTIG } from "./PTIG.js";
import { PTEG } from './PTEG.js'

export const PTG = sequelize.define("ptg", {
    id_ptg: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    fecha_entrega: {
        type: DataTypes.DATE,
        defaultValue: null,
        allowNull: true
    },
    estatus: {
        type: DataTypes.STRING(2),
        allowNull: false,
        defaultValue: 'PC'
    },
    id_profesor_revisor: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    fecha_designacion_revisor: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: new Date()
    }
},
{
    timestamps: false
});

PTG.hasOne(TDG, {
    foreignKey: 'id_ptg',
    sourceKey: 'id_ptg'
});

TDG.belongsTo(PTG, {
    foreignKey: 'id_ptg',
    targetId: 'id_ptg'
});

PTG.hasOne(Aprueba_Comite, {
    foreignKey: 'id_ptg',
    sourceKey: 'id_ptg'
});

Aprueba_Comite.belongsTo(PTG, {
    foreignKey: 'id_ptg',
    targetId: 'id_ptg'
});

PTG.hasOne(PTIG, {
    foreignKey: 'id_ptig',
    sourceKey: 'id_ptg'
});

PTIG.belongsTo(PTG, {
    foreignKey: 'id_ptig',
    targetId: 'id_ptg'
});

PTG.hasOne(PTEG, {
    foreignKey: 'id_pteg',
    sourceKey: 'id_ptg'
});

PTEG.belongsTo(PTG, {
    foreignKey: 'id_pteg',
    targetId: 'id_ptg'
});