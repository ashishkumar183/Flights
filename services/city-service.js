const CityRepository = require('../repositories/city-repository'); // Fixed import
const cityRepository = new CityRepository(); // Create instance

class CityService {
    async createCity(data) {
        try {
            const city = await cityRepository.createCity(data);
            return city;
        } catch(error) {
            console.log("Error in service layer:", error);
            throw error;
        }
    }
}

module.exports = new CityService();