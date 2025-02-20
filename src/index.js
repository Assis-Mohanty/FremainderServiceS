const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');
const { sendBasicEmail }=require("./services/email-service");
const jobs=require("./utils/job")
const TicketController=require("./controllers/ticket-controller")
const setUpAndStartServer = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended : true }));
  app.post("/api/v1/tickets",TicketController.create)
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    jobs();
    // sendBasicEmail(
    //   "qqq@qqq.com",
    //   "assis.mohanty.98@gmail.com",
    //   "qqq",
    //   "2sdsdwasd"
    // )
  });
}
setUpAndStartServer(); 