import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

import { Contiene_Criterios_TDGI_TA } from "./Contiene_Criterios_TDGI_TA.js";

export const Criterios_TDGI_TA = sequelize.define('criterios_tdgi_ta',{
    id_criterios_tdgi_ta: {
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

Criterios_TDGI_TA.hasOne(Contiene_Criterios_TDGI_TA, {
    foreignKey: 'id_criterios_tdgi_ta',
    sourceKey: 'id_criterios_tdgi_ta'
});

Contiene_Criterios_TDGI_TA.belongsTo(Criterios_TDGI_TA, {
    foreignKey: 'id_criterios_tdgi_ta',
    targetId: 'id_criterios_tdgi_ta'
});