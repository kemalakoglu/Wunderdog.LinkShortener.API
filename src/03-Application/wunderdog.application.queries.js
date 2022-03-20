const RedisRepository = require('../02-Domain/aggregates/link.shortener.redis.repository');
const redisRepository = new RedisRepository();

class ApplicationQueries {
    async GetAsync(id) {
        return await redisRepository.GetAsync(id);
    }

    async GetListByPageAsync(pageSize, pageNumber) {
        return await redisRepository.GetListByPageAsync();
    }

    async GetMostSearchedLinksAsync() {
        return await redisRepository.GetMostSearchedLinksAsync();
    }

    async GetLastTenLinksAsync() {
        return await redisRepository.GetLastTenLinksAsync();
    }

    async GetDailyLinksAsync() {
        return await redisRepository.GetDailyLinksAsync();
    }
}

module.exports = ApplicationQueries;




