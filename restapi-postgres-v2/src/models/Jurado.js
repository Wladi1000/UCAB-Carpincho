import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';
import { Conforma_Jurado_Profesor } from "./Conforma_Jurado_Profesor";

export const Jurado = sequelize.define('jurado', {
    id_jurado: {
        type: DataTypes.TEXT,
        primaryKey: true
    },
    fecha_conformacion: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
    }
});

Jurado.hasOne(Conforma_Jurado_Profesor, {
    foreignKey: 'id_jurado',
    sourceKey: 'id_jurado'
});

Conforma_Jurado_Profesor.belongsTo(Jurado, {
    foreignKey: 'id_jurado',
    targetId: 'id_jurado'
});