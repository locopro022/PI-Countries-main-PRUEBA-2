var Sequelize = require('sequelize');
const Op = Sequelize.Op;
//Importo Router de express y las funciones del controller de Activities
const { Router } =  require('express');
const { createActivity, selectNames, bulkCreate } = require('./../controllers/activities.js');
const { Activities, Country } = require('../../db.js');

//Invoco el router
const router = Router();

//Creo las rutas
//Ruta para crear actividades
router.post('/', async (req, res) => {
    const { name, difficult, duration, season, countries } = req.body;
    try {
        res.status(201).json(await createActivity(name, difficult, duration, season, countries));
    } catch (err) {
        console.log(err.message)
        res.status(400).json({error: err.message});
    }
})

//Ruta para obtener los nombres y duraciones de las actividades para el filtrado de búsqueda
router.get('/:select', async (req, res) => {
    const { select } = req.params
    try {
        res.status(200).json(await selectNames(select))
    } catch (err) {
        res.status(400).json({error: err.message})
    }
})


router.get('/', async (req, res) => {
    const {name} = req.query;
    try{
      if(name && name.length > 0){
        const activity = await Activities.findAll({
          where:{
            name: {
              [Op.iLike]: `%${name}%`
            }
          },
          include: Country
        })
        res.status(200).json(activity)
      }else{
        const activity = await Activities.findAll({include: Country});
        res.status(200).json(activity);
      }
    }catch(e){
      console.log(e);
    }
  
  })

//PRUEBA
router.post('/prueba', async (req, res) => {
    const { arr } = req.body;
    try {
        res.status(200).json(await bulkCreate(arr));
    } catch (err) {
        res.status(400).json({error: err.message});
    }
})


//Exporto las rutas
module.exports = router;