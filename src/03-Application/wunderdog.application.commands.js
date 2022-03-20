const kafkaProducer = require('../01-Infrastructure/kafka.producer');
const constants = require('../01-Infrastructure/constants');
const producer = new kafkaProducer();
const kafkaTopics = new constants();
class ApplicationCommands {
    async GetAsync(id) {
        return await redisRepository.GetAsync(id);
    }

    async CreateAsync(request) {
        await producer.produce(kafkaTopics.createAsyncTopic(), JSON.stringify(request).toString());
    }

    async UpdateAsync(request) {
        await producer.produce(kafkaTopics.updateAsyncTopic(), JSON.stringify(request).toString());
    }

    async DeleteAsync(request) {
        await producer.produce(kafkaTopics.deleteAsyncTopic(), JSON.stringify(request).toString());
    }
}

module.exports = ApplicationCommands;