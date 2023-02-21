import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const Aprueba_Comite = sequelize.define("aprueba_comite", {
    fecha_comite: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    estatus: {
        type: DataTypes.STRING(2),
        allowNull: false,
        defaultValue: 'PA'
    }
});