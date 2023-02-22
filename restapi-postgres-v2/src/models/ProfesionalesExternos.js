import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';
import { Conforma_Jurado_ProfesionalExterno } from "./Conforma_Jurado_ProfesionalExterno.js";
import { SPTGI } from "./SPTGI.js";

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
ProfesionalesExternos.hasOne(SPTGI, {
    foreignKey: 'id_profesionale',
    sourceKey: 'id_profesionale'
});

SPTGI.belongsTo(ProfesionalesExternos, {
    foreignKey: 'id_profesionale',
    targetId: 'id_profesionale'
});

ProfesionalesExternos.hasOne(Conforma_Jurado_ProfesionalExterno, {
    foreignKey: 'id_profesionale',
    sourceKey: 'id_profesionale'
});

Conforma_Jurado_ProfesionalExterno.belongsTo(ProfesionalesExternos, {
    foreignKey: 'id_profesionale',
    targetId: 'id_profesionale'
});
