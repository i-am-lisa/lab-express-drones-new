// Iteration #1

// first check if our db is connected
require('../configs/db.config.js')

const mongoose = require('mongoose')

// require the model
let DroneModel = require('../models/Drone.model.js')

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];


  DroneModel.create(drones)
  .then(()=>{
          console.log('Data seeded')
          mongoose.connection.close()
        
  })
  .catch((error)=>{
      console.log('something went wrong creating the DroneModel', error)
  })


