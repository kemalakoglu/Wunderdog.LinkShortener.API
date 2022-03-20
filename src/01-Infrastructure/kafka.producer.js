const { Kafka } = require("kafkajs")
const { createAsyncTopic, updateAsyncTopic, deleteAsyncTopic } = require('../01-Infrastructure/constants');
const clientId = "Shortener.API"
const brokers = ["localhost:29092"]

const kafka = new Kafka({
	clientId: clientId,
	brokers: brokers
})

const admin = kafka.admin();

class KafkaProducer {
	async createTopic() {
		await admin.connect()
		try {
			await admin.createTopics({
				waitForLeaders: true,
				topics: [
					{ topic: 'create-link' },
					{ topic: 'update-link' },
					{ topic: 'delete-link' },
				]
			})
		} catch (err) {
			console.error("could not create topic " + err)
		}
	}

	produce = async (topic, message) => {
		const producer = kafka.producer({
			allowAutoTopicCreation: true,
			transactionTimeout: 30000
		});
		const uuid = this.createUUID();
		await producer.connect()
		try {
			await producer.send({
				topic: topic,
				messages: [
					{ key: uuid, value: message}
				]
			})
		} catch (err) {
			console.error("could not write message " + err)
		}
	}

	createUUID() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		   var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
		   return v.toString(16);
		});
	 }
}


module.exports = KafkaProducer;