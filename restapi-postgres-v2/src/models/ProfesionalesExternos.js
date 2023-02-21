import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const ProfesionalesExternos = sequelize.define('profesionalesexternos', {
    id_profesionale: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    id_empresa: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha_aceptacion: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
    }
},{
    timestamps: false
});
/*
ProfesionalesExternos.hasOne(Conforma_Jurado_Profesor, {
    foreignKey: 'id_profesor',
    sourceKey: 'id_profesor'
});

Conforma_Jurado_Profesor.belongsTo(Profesores, {
    foreignKey: 'id_profesor',
    targetId: 'id_profesor'
});
*/