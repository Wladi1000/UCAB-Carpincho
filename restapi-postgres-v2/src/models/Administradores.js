import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';
import { SPTG } from './SPTG.js';

export const Administradores = sequelize.define('administradores', {
    id_administrador: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    oficina: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    cargo: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    experiencia:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

Administradores.hasOne(SPTG, {
    foreignKey: 'id_admin_evaluador',
    sourceKey: 'id_administrador',
    allowNull: false
});

SPTG.belongsTo(Administradores, {
    foreignKey: 'id_admin_evaluador',
    targetId: 'id_administrador'
});


