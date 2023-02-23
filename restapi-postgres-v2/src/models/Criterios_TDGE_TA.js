import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

import { Contiene_Criterios_TDGE_TA } from "./Contiene_Criterios_TDGE_TA.js";
export const Criterios_TDGE_TA = sequelize.define('criterios_tdge_ta',{
    id_criterios_tdge_ta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.TEXT,
        allowNull: false
    }
},
{
    timestamps: false
});

Criterios_TDGE_TA.hasOne(Contiene_Criterios_TDGE_TA, {
    foreignKey: 'id_criterios_tdge_ta',
    sourceKey: 'id_criterios_tdge_ta'
});

Contiene_Criterios_TDGE_TA.belongsTo(Criterios_TDGE_TA, {
    foreignKey: 'id_criterios_tdge_ta',
    targetId: 'id_criterios_tdge_ta'
});