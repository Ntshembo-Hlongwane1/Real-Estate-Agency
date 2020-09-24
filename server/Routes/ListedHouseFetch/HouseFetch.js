const router = require("express").Router();
const House = require("../../Models/Houses");
const Houses = require("../../Models/Houses");

router.get("/house/sale", async (request, response) => {
  await Houses.find({ "house_properties.sale_or_rent": "SALE" })
    .exec()
    .then((data) => {
      response.status(200).json(data);
    });
});

router.get("/house/rent", async (request, response) => {
  await Houses.find({ "house_properties.sale_or_rent": "RENT" })
    .exec()
    .then((data) => {
      response.status(200).json(data);
    });
});

router.get("/house/location-filter/:location", async (request, response) => {
  const req_location = request.params.location;
  const location = req_location.charAt(0).toUpperCase() + req_location.slice(1);
  await House.find({ "house_location.province": location })
    .exec()
    .then((data) => {
      response.status(200).json(data);
    });
});
router.get("/house/room-filter/:roomNO", async (request, response) => {
  await House.find({ "house_properties.bedroomNumber": request.params.roomNO })
    .exec()
    .then((data) => {
      response.status(200).json(data);
    });
});

module.exports = router;
