import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const Designa_TA = sequelize.define("designa_ta", {
    fecha_designacion: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
        allowNull: false
    }
});