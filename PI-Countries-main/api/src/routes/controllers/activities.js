//Importo el modelo de Tourist_Activities de sequelize
const { Activities, Country } = require('../../db.js');

//Exporto el modulo con las funciones de cada operación
module.exports = {
    createActivity: async (name, difficult, duration, season, countries) => {
        //Manejo de errores
        if (!name || !difficult || !duration || !season || !countries) throw new Error('Faltan pasar datos');

        //Creación de nueva actividad
        const newActivity =  await Activities.create({
            name,
            difficult,
            duration,
            season,
        })

        const activity = await Activities.findByPk(newActivity.id); //Busco la actividad recién creada
        await activity.setCountries(countries) //Seteo los países designados a dicha actividad

        //Busco la actividad recién relacionada con sus respectivos países 
        /* const relation = await Activities.findAll({ 
            where: {
                id: newActivity.id
            },
            include: {
                model: Country,
                through: {
                    attributes: []
                }
            }
        })
        
        return relation */
    },

    selectNames: async (select) => {
        const groups = await Activities.findAll({
            attributes: [select],
            group: [select]
            
        })
        return groups
    },
}
