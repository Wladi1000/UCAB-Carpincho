import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';
import { Contiene_Criterios_TDGE_J } from "./Contiene_Criterios_TDGE_J.js";

export const Criterios_TDGE_J = sequelize.define('criterios_tdge_j',{
    id_criterios_tdge_j: {
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

Criterios_TDGE_J.hasOne(Contiene_Criterios_TDGE_J, {
    foreignKey: 'id_criterios_tdge_j',
    sourceKey: 'id_criterios_tdge_j'
});

Contiene_Criterios_TDGE_J.belongsTo(Criterios_TDGE_J, {
    foreignKey: 'id_criterios_tdge_j',
    targetId: 'id_criterios_tdge_j'
});