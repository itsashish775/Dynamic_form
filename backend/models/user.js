const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    addresses: [{
        city: String,
        state: String,
        houseNo: String,
        country: String,
    }]

},
    {
        timestamps: true
    }
);


module.exports = mongoose.model('User', schema);
