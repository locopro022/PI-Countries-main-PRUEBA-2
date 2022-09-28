const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activities', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    difficult: {
        type: DataTypes.STRING,
        
    },
    duration: {
        type: DataTypes.INTEGER,
    },
    season: {
        type: DataTypes.ENUM('Verano','Otoño', 'Primavera', 'Invierno')
    }
}, {
    timestamps: false,
})
};