const recordServices = require('../services/recordService')

const getAllRecords = async function(req, res){
    const result = await recordServices.getAllRecords()
    res.status(200).send(result)
}

const getLastRecord = async function(req, res){
    const { params: { idDevice } } = req
    if (!idDevice || isNaN(idDevice)) {
        res.status(400).send({ error: "ID inválido" })
        return
    }
    const result = await recordServices.getLastDeviceRecord(idDevice)
    res.status(200).send(result)
}

const insertRecord = async function(req, res){
    const { body } = req

    if (!body.Id_device || !body.Current_value) {
        res.status(400).send({ status: "Error", data: { error: "Faltan datos" } })
        return
    }

    const newRecord = {
        Id_device: body.Id_device,
        Current_value: body.Current_value
    }

    const result = await recordServices.insertRecord(newRecord)
    res.setHeader('Content-Type', 'application/json').status(201).send(result)
}

const updateRecord = async function(req, res){
    const { body } = req

    if (!body.id || !body.value) {
        res.status(400).send({ status: "Error", data: { error: "Faltan datos" } })
        return
    }

    const result = await recordServices.updateRecord(body.id, body.value)
    res.setHeader('Content-Type', 'application/json').status(200).send(result)
}

const deleteRecord = async function(req, res){
    const { params: { idRecord } } = req

    if (!idRecord || isNaN(idRecord)) {
        res.status(400).send({ error: "ID inválido" })
        return
    }

    const result = await recordServices.deleteRecord(idRecord)
    res.status(200).send(result)
}

module.exports = {
    insertRecord,
    deleteRecord,
    updateRecord,
    getAllRecords,
    getLastRecord
}