const { Router } = require('express');
const axios = require('axios');
const { Country, Activities } = require('../db.js');
const { Op } = require("sequelize");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


// ruta para un pais en particular, buscado por nombre pasado por query

//ruta para todos los paises
router.get( '/countries', async (req, res, next) => {
    //llamar a la api
    //filtrar los datos recibidos
    //formatear los datos filtrados
    //enviar los datos ya filtrados
  const { name } = req.query;                                           
    
    if(name) {                                            //comprobamos si el parametro name existe
      try {                                               // si existe, filtramos ese pais
    const country = await Country.findAll({               //si no existe mostramos todos los paises
      where: {
        nameCommon: {[Op.iLike]: `%${name}%`}
      },
      include: Activities
    });
    res.status(200).json(country);
    
  } catch (error) {
    console.log(error);}
    } else {
    try{  
      const fullCountries = await Country.findAll({         //revisamos si la base de datos ya tiene datos cargados
        include: Activities
      });
      if(fullCountries.length) res.status(200).json(fullCountries);
      /* else{
      const api = await axios.get('https://restcountries.com/v3/all') //llamar a la api
      //console.log(api)
    
      const countFilter = api.data.map((e) => {       //mapeamos la api para formatear nuestro pais
        const obj ={
          id: e.cca3,  
          name: e.name.common, //nombre comun del pais
          nameOfficial: e.translations.spa.official, //Nombre oficial del pais en español
          nameCommon: e.translations.spa.common, //Nombre comun del pais en español
          img: e.flags[1], //traigo la bandera con extension .png
          continent: e.region,
          capital: e.capital ? e.capital[0] : 'No se registra capital', // si no tiene capital, devuelve 'No capital'
          subregion: e.subregion, //? e.capital : 'No se registra subregion',
          area: e.area,
          population: e.population,
        }
        try {
        Country.findOrCreate({     //buscamos o creamos el pais en la base de datos
          where: {
            name: obj.name},
            defaults: obj
        })}
        catch (error) {
          console.log(error)
        }
        return obj
      });
      res.send(countFilter)

    } */
    
  } catch (error) {
        console.log(error)
            res.status(400)
      }}
}); 


// ruta para un pais en particular, buscado por id nombre
router.get( "/countries/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const country = await Country.findByPk(id, {include: Activities});  //buscamos el pais por id
    res.status(200).json(country);
  } catch (error) {
    console.log(error);}
    
})



// ruta para crear una nueva actividad turistica

router.post('/activities', async (req, res) =>{
    try {
    const { nameActivity, difficulty, duration, season, country } = req.body;
    if(!nameActivity || !difficulty || !duration || !season){         //comprobamos que los campos no esten vacios
      return res.status(404).send("Porfavor ingrese toda la informacion requerida");
    } else {

    const newActivity = await Activities.create({                     //creamos la nueva actividad, con el formato elegido
      nameActivity,
      difficulty,
      duration,
      season,
    });

    country.forEach(async (country) => {                              //recorremos el array de paises
      const activityCountry = await Country.findOne({                 //una vez encontrado el pais en la base de datos
        where: {  
            nameCommon: country        //lo asociamos a la actividad 
        },
      });
      await newActivity.addCountry(activityCountry);
    });
    res.status(200).send(newActivity);
  } } catch (error) {
    console.log(error);
    res.status(500).send("Actividad agregada con exito!", error);
  }
});





module.exports = router;
