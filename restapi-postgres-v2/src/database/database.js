import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('postgresql://postgres:1234@localhost:5432/UCAB-Carpincho',
{
  define: {
        freezeTableName: true
   } 
});

