const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const klinikSchema = new Schema({
    NamaPasien: {
        type: String
    },
    TanggalLahir: {
        type: String
    },
    Umur: {
        type: String
    },
    Alamat: {
        type: String
    },
    NoTelp: {
        type: String
    }
})

module.exports = mongoose.model('klinik', klinikSchema)