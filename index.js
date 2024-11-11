const express = require("express");
require('dotenv').config();
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const port = 3000;

const database = require("./config/database");
database.connect();

const routeClient = require("./routes/client/index.route");

//Tất cả tên miền đều có thể truy cập vào
app.use(cors())

// Cho phép 1 tên miền cụ thể được phép truy cập vào API
/* const corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
cors(corsOptions); */

// parse application/json
app.use(bodyParser.json())

routeClient(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});