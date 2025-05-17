
---
Reminder Service

The **Reminder Service** is responsible for sending **email notifications** and **reminders** for upcoming flights. It is triggered by booking events through a **RabbitMQ message queue**, ensuring decoupled, scalable communication.

**Repository:** [FremainderServiceS](https://github.com/Assis-Mohanty/FremainderServiceS)

---

## 🧩 Microservice Architecture Overview

This service is part of a larger **Flight Booking Microservice System**:

| Service                  | Description                                                    | Repository                        |
| ------------------------ | -------------------------------------------------------------- | --------------------------------- |
| 🔍 Flight Search Service | [Link](https://github.com/Assis-Mohanty/FandS)                 | Search and manage flight data     |
| 🛒 Booking Service       | [Link](https://github.com/Assis-Mohanty/Flight_bookingService) | Handles flight bookings           |
| ⏰ Reminder Service       | **You are here**                                               | Sends reminders and notifications |
| 🔐 Auth Service          | [Link](https://github.com/Assis-Mohanty/FauthS)                | Authenticates users               |
| 🌐 API Gateway           | [Link](https://github.com/Assis-Mohanty/ApiGateway)            | Entry point to all services       |

---

## ⚙️ Tech Stack

* **Node.js + Express** — Core backend
* **MySQL + Sequelize** — Database ORM
* **amqplib** — Connects to RabbitMQ for event-based messaging
* **node-cron** — Task scheduler for periodic checks
* **nodemailer** — Sends email notifications
* **dotenv** — Loads environment variables

---

## 🔄 Functional Flow

1. **Booking Service** completes a booking.
2. It sends a message to RabbitMQ.
3. **Reminder Service** consumes the message.
4. Stores reminder data in DB.
5. Uses `node-cron` to check upcoming flights.
6. Sends reminder emails via `nodemailer`.

---

## 🗃️ Folder Structure

```
FremainderServiceS/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── jobs/
│   ├── queue/
│   ├── services/
│   ├── models/
│   └── index.js
├── config/
│   └── config.json
├── .env
└── package.json
```

---

## 🚀 Run the Service

```bash
git clone https://github.com/Assis-Mohanty/FremainderServiceS
cd FremainderServiceS
npm install
cp .env.example .env  # Add MQ URL, email credentials, DB config
npm start
```

---

## 🔐 .env Example

```env
PORT=4002
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=remainder_service
RABBITMQ_URL=amqp://localhost
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

---

## 🧪 Future Improvements

* Add retry logic on email failure
* Store email delivery logs
* Use Redis for better job scheduling
* Add UI dashboard for reminder management

---

## 🧑‍💻 Author

Maintained by [Assis Mohanty](https://github.com/Assis-Mohanty)

---


