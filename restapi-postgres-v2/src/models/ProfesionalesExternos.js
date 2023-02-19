import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const ProfesionalesExternos = sequelize.define('profesionalesexternos', {
    id_profesionalE: {
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
});