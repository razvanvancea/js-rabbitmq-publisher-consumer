const amqp = require("amqplib");

const msg = {
    // id: 2,
    id: process.argv[2],
    name: "RV"
};

connect();

async function connect() {
    try {
        const connection = await amqp.connect('amqp://localhost:5672');
        const channel = await connection.createChannel();

        const result = await channel.assertQueue('jobs');

        channel.sendToQueue("jobs",Buffer.from(JSON.stringify(msg)));
        console.log(`Job sent successfully ${msg.id}`);
    } catch(err){
        console.error(err);
    }
}
