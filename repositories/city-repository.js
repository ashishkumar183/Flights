const { City } = require('../models/index');

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name }); // Fixed from createS to create
            return city;
        } catch (error) {
            console.log("Error in repository layer:", error);
            throw error;
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log("Error in repository layer:", error);
            throw error;
        }
    }
}

module.exports = CityRepository;