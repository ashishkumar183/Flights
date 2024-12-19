const CityService = require('../services/city-service');

class CityController {
    async createCity(req, res) {
        try {
            const city = await CityService.createCity({
                name: req.body.name
            });
            return res.status(201).json({
                data: city,
                success: true,
                message: 'Successfully created a city',
                err: {}
            });
        } catch (error) {
            console.log("Error in controller layer:", error);
            return res.status(500).json({
                data: {},
                success: false,
                message: 'Not able to create a city',
                err: error
            });
        }
    }
}

module.exports = new CityController();