const bd = require("../models/recordSP")

// SELECT * FROM device_records
const getAllRecords = async function () {
    const resp = await bd.selectAllRecords()
    console.log("getAllRecords ->", resp)
    return resp
}

// SELECT * FROM device_records WHERE id_device = ? ORDER BY id_record DESC LIMIT 1
const getLastDeviceRecord = async function (id) {
    const resp = await bd.selectLastRecordById(id)
    return resp
}

// INSERT INTO device_records
const insertRecord = async function (JsonObj) {
    const { id_device, current_value } = JsonObj
    const resp = await bd.insertRecord(id_device, current_value)
    return resp
}

// UPDATE device_records SET current_value = ? WHERE id_record = ?
const updateRecord = async function (JsonObj) {
    const { id_record, current_value } = JsonObj
    const resp = await bd.updateRecord(id_record, current_value)
    return resp
}

// DELETE FROM device_records WHERE id_record = ?
const deleteRecord = async function (id) {
    const resp = await bd.deleteRecord(id)
    return resp
}

module.exports = {
    getAllRecords,
    getLastDeviceRecord,
    insertRecord,
    updateRecord,
    deleteRecord
}
