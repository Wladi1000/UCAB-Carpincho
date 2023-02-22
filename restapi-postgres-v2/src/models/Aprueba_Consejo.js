import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const Aprueba_Consejo = sequelize.define("aprueba_consejo", {
    fecha_consejo: {
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
        allowNull: true
    }
});