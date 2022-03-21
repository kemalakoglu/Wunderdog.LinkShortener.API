const redisRepository = require('../02-Domain/aggregates/link.shortener.redis.repository');
const repository = new redisRepository();

class applicationQueries {
    async getAsync(id) {
        return await repository.getAsync(id);
    }

    async getListByPageAsync(pageSize, pageNumber) {
        return await repository.getListByPageAsync();
    }

    async getMostSearchedLinksAsync() {
        return await repository.getMostSearchedLinksAsync();
    }

    async getLastTenLinksAsync() {
        return await repository.getLastTenLinksAsync();
    }

    async getDailyLinksAsync() {
        return await repository.getDailyLinksAsync();
    }
}

module.exports = applicationQueries;




