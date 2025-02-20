const amqplib = require("amqplib")

const createChannel=async()=>{
    try {
        const connection=await amqplib.connect(MESSAGE_BROKET_URL)
        const channel=await connection.createChannel();
        await channel.assertExchange(EXCHANGE_NAME,'direct',false);
        return channel;
    } catch (error) {
        throw error
    }
}

const subscribeMessage=async(channel,binding_key,service)=>{
    const applicationQueue =await channel.assertQueue(QUEUE_NAME);
    channel.bindQueue(applicationQueue.queue,EXCHANGE_NAME,binding_key);
    channel.consume(applicationQueue.queue,msg=>{
        console.log("received data");
        console.log(msg.connect.toString());
        channel.ack(msg);
    })
}

module.exports={
    subscribeMessage,
    createChannel
}