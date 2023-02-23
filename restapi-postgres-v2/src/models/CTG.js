import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';
import { Aprueba_Comite } from "./Aprueba_Comite.js";

export const CTG = sequelize.define("ctg", {
    id_ctg: {
        type: DataTypes.TEXT,
        primaryKey: true
    },
    fecha_conformacion: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
    }
},
{
    timestamps: false
});

CTG.hasOne(Aprueba_Comite, {
    foreignKey: 'id_ctg',
    sourceKey: 'id_ctg'
});

Aprueba_Comite.belongsTo(CTG, {
    foreignKey: 'id_ctg',
    targetId: 'id_ctg'
});
