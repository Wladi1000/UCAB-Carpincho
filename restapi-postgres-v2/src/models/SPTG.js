import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';
import { PTG } from "./PTG.js";

import { realiza_SPTG } from "./realiza_SPTG.js";
import { SPTGE } from "./SPTGE.js";
import { SPTGI } from './SPTGI.js'

export const SPTG = sequelize.define('sptg', {
    id_sptg: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    fechaenvio: {
        type: DataTypes.DATE,
        defaultValue: null
    },
    estatus: {
        type: DataTypes.STRING(2),
        defaultValue: 'PR'
    },
    modalidad: {
        type: DataTypes.CHAR,
        allowNull: false,
        defaultValue: 'E'
    }
},
{
    timestamps: false,
    tableName: 'sptg'
});

SPTG.hasOne(realiza_SPTG, {
    foreignKey: 'id_sptg',
    sourceKey: 'id_sptg'
});

realiza_SPTG.belongsTo(SPTG, {
    foreignKey: 'id_sptg',
    targetId: 'id_sptg'
});

SPTG.hasOne(SPTGI, {
    foreignKey: 'id_stig',
    sourceKey: 'id_sptg'
});

SPTGI.belongsTo(SPTG, {
    foreignKey: 'id_stig',
    targetId: 'id_sptg'
});

SPTG.hasOne(SPTGE, {
    foreignKey: 'id_steg',
    sourceKey: 'id_sptg'
});

SPTGE.belongsTo(SPTG, {
    foreignKey: 'id_steg',
    targetId: 'id_sptg'
});

SPTG.hasOne(PTG, {
    foreignKey: 'id_sptg',
    sourceKey: 'id_sptg'
});

PTG.belongsTo(SPTG, {
    foreignKey: 'id_sptg',
    targetId: 'id_sptg'
});