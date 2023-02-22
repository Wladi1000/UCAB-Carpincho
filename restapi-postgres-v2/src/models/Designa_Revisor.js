import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const Designa_Revisor = sequelize.define("designa_revisor", {
    fecha_designacion: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
        allowNull: false
    },
});