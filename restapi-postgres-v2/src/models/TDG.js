import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';
import { PTG } from './PTG.js';
import { Designa_TA } from "./Designa_TA.js";

export const TDG = sequelize.define("tdg", {
    id_tdg: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    fecha_entrega: {
        type: DataTypes.DATE,
        defaultValue: null,
        allowNull: true
    },
    hora_presentacion: {
        type: DataTypes.TIME,
        allowNull: true
    },
    estatus: {
        type: DataTypes.STRING(2),
        allowNull: false,
        defaultValue: 'PC'
    }
},{
    timestamps: false
});

TDG.hasOne(Designa_TA, {
    foreignKey: 'id_tdg',
    sourceKey: 'id_tdg'
});

Designa_TA.belongsTo(TDG, {
    foreignKey: 'id_tdg',
    targetId: 'id_tdg'
});

