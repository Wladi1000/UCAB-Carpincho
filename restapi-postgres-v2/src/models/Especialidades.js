import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';
import {Especialidad_profesor } from './Especialidad_profesor.js'

export const Especialidades = sequelize.define("especialidades", {
    id_especialidad: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
},
{
    timestamps: false
});

Especialidades.hasOne(Especialidad_profesor, {
    foreignKey: 'id_especialidad',
    sourceKey: 'id_especialidad'
});

Especialidad_profesor.belongsTo(Especialidades, {
    foreignKey: 'id_especialidad',
    targetId: 'id_especialidad'
});