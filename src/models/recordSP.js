const {getConnection} = require('./conection');

// Obtener todos los registros
const selectAllRecords = async function () {
    try {
        const conn = await getConnection();
        const [rows] = await conn.execute('CALL SP_SelectAll_Records()');
        return rows[0];
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Obtener el último registro por id_device
const selectLastRecordById = async function (id_device) {
    try {
        const conn = await getConnection();
        const [rows] = await conn.execute('CALL SP_SelectLastRecordByID(?)', [id_device]);
        return rows[0][0];
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Insertar un nuevo registro
const insertRecord = async function (id_device, current_value) {
    try {
        const conn = await getConnection();
        await conn.execute('CALL SP_Insert_Device_Record(?, ?)', [id_device, current_value]);
        return {Resultado: 'Inserción Correcta'};
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Actualizar un registro
const updateRecord = async function (id, value) {
    try {
        const conn = await getConnection();
        await connection.execute('CALL SP_Update_Device_Record(?, ?)', [id, value]);
        return { Resultado: 'Actualización Correcta' };
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Eliminar un registro
const deleteRecord = async function (id_device) {
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
    insertRecord,
    updateRecord,
    deleteRecord,
    selectAllRecords,
    selectLastRecordById
}
