import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';
import { Conforma_Jurado_Profesor } from "./Conforma_Jurado_Profesor.js";
import { Conforma_Jurado_ProfesionalExterno } from "./Conforma_Jurado_ProfesionalExterno.js";

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
},
{
    timestamps: false
});

Jurado.hasOne(Conforma_Jurado_Profesor, {
    foreignKey: 'id_jurado',
    sourceKey: 'id_jurado'
});

Conforma_Jurado_Profesor.belongsTo(Jurado, {
    foreignKey: 'id_jurado',
    targetId: 'id_jurado'
});

Jurado.hasOne(Conforma_Jurado_ProfesionalExterno, {
    foreignKey: 'id_jurado',
    sourceKey: 'id_jurado'
});

Conforma_Jurado_ProfesionalExterno.belongsTo(Jurado, {
    foreignKey: 'id_jurado',
    targetId: 'id_jurado'
});