import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const SPTG = sequelize.define('sptg', {
    id_sptg: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    fechaenvio: {
        type: DataTypes.DATE,
        defaultValue: null
    },
    estatus: {
        type: DataTypes.STRING(2),
        defaultValue: 'PR'
    }
});


