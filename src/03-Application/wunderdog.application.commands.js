const kafkaProducer = require('../01-Infrastructure/kafka.producer');
const constants = require('../01-Infrastructure/constants');
const initRedis = require("../01-Infrastructure/redis.initialize");
const producer = new kafkaProducer();
const kafkaTopics = new constants();
class applicationCommands {
    async getAsync(id) {
        return await redisRepository.getAsync(id);
    }

    async CreateAsync(request) {
        await producer.produce(kafkaTopics.createAsyncTopic(), JSON.stringify(request).toString());
    }

    async DeleteAsync(request) {
        const client = await initRedis();
        // const response = await client.get(request.id);
        // if (response == null)
        //     return ("Data not found");
        await producer.produce(kafkaTopics.deleteAsyncTopic(), JSON.stringify(request).toString());
    }
}

module.exports = applicationCommands;