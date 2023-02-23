import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

import {Contiene_Criterios_TDGI_TE} from './Contiene_Criterios_TDGI_TE.js'

export const Criterios_TDGI_TE = sequelize.define('criterios_tdgi_te',{
    id_criterios_tdgi_te: {
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

Criterios_TDGI_TE.hasOne(Contiene_Criterios_TDGI_TE, {
    foreignKey: 'id_criterios_tdgi_te',
    sourceKey: 'id_criterios_tdgi_te'
});

Contiene_Criterios_TDGI_TE.belongsTo(Criterios_TDGI_TE, {
    foreignKey: 'id_criterios_tdgi_te',
    targetId: 'id_criterios_tdgi_te'
});