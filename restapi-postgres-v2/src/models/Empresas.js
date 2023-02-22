import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';
import { ProfesionalesExternos } from "./ProfesionalesExternos.js";
import { SPTGI } from "./SPTGI.js";

export const Empresas = sequelize.define("empresas", {
    id_empresa: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    rif: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    direccion: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    telefono: {
        type: DataTypes.STRING(13),
        allowNull: false
    }
},{
    timestamps: false
});

Empresas.hasOne(ProfesionalesExternos, {
    foreignKey: 'id_empresa',
    sourceKey: 'id_empresa'
});

ProfesionalesExternos.belongsTo(Empresas, {
    foreignKey: 'id_empresa',
    targetId: 'id_empresa'
});

Empresas.hasOne(SPTGI, {
    foreignKey: 'id_empresa',
    sourceKey: 'id_empresa'
});

SPTGI.belongsTo(Empresas, {
    foreignKey: 'id_empresa',
    targetId: 'id_empresa'
});