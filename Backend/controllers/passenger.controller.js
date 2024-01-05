

const passengerModel = require('../model/passenger.model');

const passengerController = {
    passengersInfo: async (req, res) => {
        const passengers = await passengerModel
            .find()
            .sort({ created: -1 })
            .select('firstName lastName email phone');

        res.json({ passengers });
    },
};

module.exports = passengerController;
