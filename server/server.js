const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();

//MiddleWare
app.use(cors());

//API ENDPOINTS CONSTANTS
const HouseListingRoute = require("./Routes/HouseUpload/HouseSaleOrRent");
const ListHouseFecthRoute = require("./Routes/ListedHouseFetch/HouseFetch");
const ContactFormRoute = require("./Routes/EmailRoute/Email");
//API ENDPOINTS
app.use(HouseListingRoute);
app.use(ListHouseFecthRoute);
app.use(ContactFormRoute);

//SERVER'S ENTRY POINT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
