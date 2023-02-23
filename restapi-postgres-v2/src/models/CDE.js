import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';
import { Aprueba_Consejo } from "./Aprueba_Consejo.js";
import { Designa_TA } from "./Designa_TA.js";

export const CDE = sequelize.define("cde", {
    id_cde: {
        type: DataTypes.STRING(13),
        primaryKey: true
    },
    fecha_conformacion: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
    }
},
{
    timestamps: false
});

CDE.hasOne(Aprueba_Consejo, {
    foreignKey: 'id_cde',
    sourceKey: 'id_cde'
});

Aprueba_Consejo.belongsTo(CDE, {
    foreignKey: 'id_cde',
    targetId: 'id_cde'
});

CDE.hasOne(Designa_TA, {
    foreignKey: 'id_cde',
    sourceKey: 'id_cde'
});

Designa_TA.belongsTo(CDE, {
    foreignKey: 'id_cde',
    targetId: 'id_cde'
});