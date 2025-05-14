const express = require('express')
const router = express.Router()
const recordController = require('../../controllers/recordController')
const deviceController = require('../../controllers/deviceController')

router
    // Base URL: http://localhost:3000/api/v1

    // ======================
    // Device Routes
    // ======================

    // GET http://localhost:3000/api/v1/devices
    .get('/devices', deviceController.getAllDevices)

    // POST http://localhost:3000/api/v1/devices
    .post('/devices', deviceController.insertDevice)

    // PUT http://localhost:3000/api/v1/devices
    .put('/devices', deviceController.updateDevice)

    // DELETE http://localhost:3000/api/v1/devices/:idDevice
    .delete('/devices/:idDevice', deviceController.deleteDevice)

    // ======================
    // Record Routes
    // ======================

    // GET http://localhost:3000/api/v1/records
    .get('/records', recordController.getAllRecords)

    // GET http://localhost:3000/api/v1/records/last/:idDevice
    .get('/records/last/:idDevice', recordController.getLastRecord)

    // POST http://localhost:3000/api/v1/records
    .post('/records', recordController.insertRecord)

    // PUT http://localhost:3000/api/v1/records
    .put('/records', recordController.updateRecord)

    // DELETE http://localhost:3000/api/v1/records/:idRecord
    .delete('/records/:idRecord', recordController.deleteRecord)

module.exports = router