const { getConnection } = require('./conection');

// Obtener todos los dispositivos
const selectAllDevices = async function () {
    try {
        const conn = await getConnection();
        const [rows] = await conn.execute('CALL SP_SelectAll_Devices()');
        return rows[0];
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Insertar un dispositivo
const insertDevice = async function (id_type, id_signal_type, name) {
    try {
        const conn = await getConnection();
        await conn.execute('CALL SP_Insert_Device(?, ?, ?)', [id_type, id_signal_type, name]);
        return { Resultado: 'Inserción Correcta' };
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Actualizar un dispositivo
const updateDevice = async function (id_device, id_type, id_signal_type, name) {
    try {
        const conn = await getConnection();
        await conn.execute('CALL SP_Update_Device(?, ?, ?, ?)', [id_device, id_type, id_signal_type, name]);
        return { Resultado: 'Actualización Correcta' };
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Eliminar un dispositivo
const deleteDevice = async function (id_device) {
    try {
        const conn = await getConnection();
        await conn.execute('CALL SP_Delete_Device(?)', [id_device]);
        return { Resultado: 'Eliminación Correcta' };
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = {
    selectAllDevices,
    insertDevice,
    updateDevice,
    deleteDevice
}
