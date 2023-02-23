import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const Aprueba_Comite = sequelize.define("aprueba_comite", {
    id_ctg: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    id_ptg: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
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
},
{
    timestamps: false
});