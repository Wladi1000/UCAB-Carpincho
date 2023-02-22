import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const evalua_SPTG = sequelize.define("evalua_sptg", {
    id_sptg: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    id_administrador: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    fecha_revision: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
    }
},{
    timestamps: false
});