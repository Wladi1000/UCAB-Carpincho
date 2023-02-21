import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const realiza_SPTG = sequelize.define("realiza_sptg", {
    fecha_revision: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
    }
});