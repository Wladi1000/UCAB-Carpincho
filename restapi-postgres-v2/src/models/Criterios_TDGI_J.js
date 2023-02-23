import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

import { Contiene_Criterios_TDGI_J } from "./Contiene_Criterios_TDGI_J.js";

export const Criterios_TDGI_J = sequelize.define('criterios_tdgi_j',{
    id_criterios_tdgi_j: {
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

Criterios_TDGI_J.hasOne(Contiene_Criterios_TDGI_J, {
    foreignKey: 'id_criterios_tdgi_j',
    sourceKey: 'id_criterios_tdgi_j',
});

Contiene_Criterios_TDGI_J.belongsTo(Criterios_TDGI_J, {
    foreignKey: 'id_criterios_tdgi_j',
    targetId: 'id_criterios_tdgi_j'
});