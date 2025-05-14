const deviceServices = require('../services/deviceService')

const getAllDevices = async function(req, res){
    const result = await deviceServices.getAllDevices()
    res.status(200).send(result)
}

const insertDevice = async function(req, res){
    const { body } = req

    if (!body.type || !body.signal || !body.name || body.name.trim() === "") {
        res.status(400).send({ status: "Error", data: { error: "Faltan o son inválidos algunos datos" } })
        return
    }

    const newDevice = {
        type: body.type,
        signal: body.signal,
        name: body.name.trim()
    }

    const result = await deviceServices.insertDevice(newDevice)
    res.setHeader('Content-Type', 'application/json').status(201).send(result)
}

const updateDevice = async function(req, res){
    const { body } = req

    if (!body.id || !body.type || !body.signal || !body.name || body.name.trim() === "") {
        res.status(400).send({ status: "Error", data: { error: "Faltan o son inválidos algunos datos" } })
        return
    }

    const device = {
        id: body.id,
        type: body.type,
        signal: body.signal,
        name: body.name.trim()
    }

    const result = await deviceServices.updateDevice(device)
    res.setHeader('Content-Type', 'application/json').status(200).send(result)
}

const deleteDevice = async function(req, res){
    const { params: { idDevice } } = req

    if (!idDevice || isNaN(idDevice)) {
        res.status(400).send({ error: "ID inválido" })
        return
    }

    const result = await deviceServices.deleteDevice(idDevice)
    res.status(200).send(result)
}

module.exports = {
    getAllDevices,
    updateDevice,
    deleteDevice,
    insertDevice
}