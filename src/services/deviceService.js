const bd = require("../models/deviceSP")

// SELECT * FROM device_info
const getAllDevices = async function () {
    const resp = await bd.selectAllDevices()
    console.log("getAllDevices ->", resp)
    return resp
}

// INSERT INTO device_info
const insertDevice = async function (JsonObj) {
    const { id_type, id_signal_type, name } = JsonObj
    const resp = await bd.insertDevice(id_type, id_signal_type, name)
    return resp
}

// UPDATE device_info
const updateDevice = async function (JsonObj) {
    const { id_device, id_type, id_signal_type, name } = JsonObj
    const resp = await bd.updateDevice(id_device, id_type, id_signal_type, name)
    return resp
}

// DELETE device_info
const deleteDevice = async function (id) {
    const resp = await bd.deleteDevice(id)
    return resp
}

module.exports = {
    getAllDevices,
    insertDevice,
    updateDevice,
    deleteDevice
}
