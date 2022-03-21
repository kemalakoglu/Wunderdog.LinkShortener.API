const redis = require('redis');
const initRedis = require("../../01-Infrastructure/redis.initialize");
const constants = require("../../01-Infrastructure/constants");
const redisKeys = new constants();

class redisRepository {
    
    async getAsync(id) {
        const client = await initRedis();
        const response = await client.get(id);
        if (response == null)
            return ("Data not found");
        return response;
    }

    async getMostSearchedLinksAsync() {
        const client = await initRedis();
        const response = await client.get(redisKeys.getMostSearchedLinksKey());
        if (response == null)
            return ("Data not found");
        return response;
    }

    async getListByPageAsync(pageSize, pageNumber) {
        const client = await initRedis();
        const response = await client.get(redisKeys.getListByPageKey());
        if (response == null)
            return ("Data not found");
        return response;
    }

    async getLastTenLinksAsync() {
        const client = await initRedis();
        const response = await client.get(redisKeys.getLastTenLinksKey());
        if (response == null)
            return ("Data not found");
        return response;
    }

    async getDailyLinksAsync() {
        const client = await initRedis();
        const response = await client.get(redisKeys.getDailyLinksKey());
        if (response == null)
            return ("Data not found");
        return response;
    }
}

module.exports = redisRepository;