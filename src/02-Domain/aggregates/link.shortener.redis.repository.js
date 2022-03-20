const IRedisRepository = require("../contracts/IRedisRepository");
const redis = require('redis');
const initRedis = require("../../01-Infrastructure/redis.initialize");
const constants = require("../../01-Infrastructure/constants");
const redisKeys = new constants();

class RedisRepository extends IRedisRepository {

    constructor() {
        super();
    }


    async GetAsync(id) {
        const client = await initRedis();
        const response = await client.get(id);
        if (response == null)
            return ("Data not found");
        return response;
    }

    async GetMostSearchedLinksAsync() {
        const client = await initRedis();
        const response = await client.get(redisKeys.getMostSearchedLinksKey());
        if (response == null)
            return ("Data not found");
        return response;
    }

    async GetListByPageAsync(pageSize, pageNumber) {
        const response = await client.get(redisKeys.getListByPageKey());
        if (response == null)
            return ("Data not found");
        return response;
    }

    async GetLastTenLinksAsync() {
        const client = await initRedis();
        const response = await client.get(redisKeys.getLastTenLinksKey());
        if (response == null)
            return ("Data not found");
        return response;
    }

    async GetDailyLinksAsync() {
        const client = await initRedis();
        const response = await client.get(redisKeys.getDailyLinksKey());
        if (response == null)
            return ("Data not found");
        return response;
    }
}

module.exports = RedisRepository;