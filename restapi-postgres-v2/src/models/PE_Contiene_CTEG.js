import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const PE_Contiene_CTEG = sequelize.define("pe_contiene_cteg", {
    aprobacion: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    nota: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
});