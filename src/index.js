const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');
const { sendBasicEmail }=require("./services/email-service")
const cron=require("node-cron");
const setUpAndStartServer = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended : true }));
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    // sendBasicEmail(
    //   "qqq@qqq.com",
    //   "assis.mohanty.98@gmail.com",
    //   "qqq",
    //   "2sdsdwasd"
    // )
    cron.schedule("*/2 * * * *",()=>{
      console.log("running a task every two minutes");
    })
  });
}
setUpAndStartServer(); 