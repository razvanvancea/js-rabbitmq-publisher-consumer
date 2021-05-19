## **JS Project that implements RabbitMQ message broker.** 

### **Setup**
```
npm install
docker-compose up -d
```

### **Publish a message**
```
node publisher.js 7
```

Note: feel free to replace '3' with any other message ID

### **Consume a message**
```
node consumer.js
```

### **RabbitMQ GUI**
http://localhost:15672

### **RabbitMQ Docs**
https://www.rabbitmq.com/#features