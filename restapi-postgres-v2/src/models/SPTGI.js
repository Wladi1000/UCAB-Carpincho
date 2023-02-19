import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const SPTGI = sequelize.define('solicitudtigs', {
    id_stig: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    id_empresa: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_profesionale: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
});


