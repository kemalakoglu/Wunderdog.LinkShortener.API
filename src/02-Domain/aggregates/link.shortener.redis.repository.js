const redis = require('redis');
const initRedis = require("../../01-Infrastructure/redis.initialize");
const constants = require("../../01-Infrastructure/constants");
const redisKeys = new constants();
const linkModel = require('./link.shortener.model');

class redisRepository {
    
    async getAsync(id) {
        const client = await initRedis();
        const response = await client.get(id);
        if (response == null)
            return ("Data not found");
            return  response.replace("\/", '');
    }

    async getByTransactionIdAsync(id) {
        const client = await initRedis();
        const response = await client.get(id);
        if (response == null)
            return ("Data not found");
            return  response.replace("\/", '');
    }

    async getListByPageAsync() {    
        const client = await initRedis();
        const response = await client.get(redisKeys.getListByPageKey());
        if (response == null)
            return ("Data not found");
        return  response.replace("\/", '');
    }

    async getLastTenLinksAsync() {
        const client = await initRedis();
        const response = await client.get(redisKeys.getLastTenLinksKey());
        if (response == null)
            return ("Data not found");
            return  response.replace("\/", '');
    }

    async getDailyLinksAsync() {
        const client = await initRedis();
        const response = await client.get(redisKeys.getDailyLinksKey());
        if (response == null)
            return ("Data not found");
            return  response.replace("\/", '');
    }
}

module.exports = redisRepository;