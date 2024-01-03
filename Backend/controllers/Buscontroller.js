const BusModel = require('../model/Busmodel');

const Buscontroller = {
    create: async (req, res) => {
        try {
            const { departure, arrival, journeyDate, location, coordinates, busType, bookedSeat } = req.body;

            const newBus = new BusModel({
                departure,
                arrival,
                journeyDate,
                location,
                coordinates,
                busType,
                bookedSeat,
            });

            const savedBus = await newBus.save();

            res.status(201).json(savedBus,);
        } catch (error) {            
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    getBuses : async (req,res) =>{
        try{ 
            const buses = await BusModel.find();

            res.status(200).json(buses, 'Buses fetched successfully.');
        
        }catch(error){
            console.error('Error fetching Buses')
            res.status(500).json({error: 'An error occurred whille fetching Bus'});
        }
    },

    getBusId: async (req, res) => {
        try { 
            const busId = await BusModel.findById(req.params.id);
    
            if (!busId) {
                //if busID is missing return this error 
                return res.status(404).json({ error: 'Bus not found' });
            }
    
            res.status(200).json(busId);
        } catch (error) {
            console.error('error fetching Bus Id.', error);
            res.status(500).json({ error: 'An error occurred while fetching the Bus' });
        };
    },
    
    updateBusId: async (req,res) => {
        try{ 
            const busUpdate = await BusModel.findByIdAndUpdate(req.params.id, req.body, {new: true});

            if(!busUpdate){
                return res.status(404).json({error: 'Bus not found'});

            }
            res.status(200).json(busUpdate);

        } catch(error) {
            console.error('Error updating Bus ID', error);
            res.status(500).json({error: 'An error occurred while updating Bus.'})
        };
    },

    deleteBusId: async (req, res) => {
        try {
            const deleteBus = await BusModel.findByIdAndDelete(req.params.id);
    
            if (!deleteBus) {
                return res.status(404).json({ error: 'Bus not found' });
            }
    
            // document successfully deleted
            res.status(200).json({ message: 'Bus deleted successfully' });
        } catch (error) {
            console.error('Error deleting Bus', error);
            res.status(500).json({ error: 'An error occurred while deleting Bus' });
        }
    },
    
    
};

module.exports = Buscontroller;
