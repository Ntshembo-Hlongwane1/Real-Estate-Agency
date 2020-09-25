const router = require("express").Router();
const House = require("../../Models/Houses");

router.get("/house/sale", async (request, response) => {
  await House.find({ "house_properties.sale_or_rent": "SALE" })
    .exec()
    .then((data) => {
      response.status(200).json(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/house/rent", async (request, response) => {
  await House.find({ "house_properties.sale_or_rent": "RENT" })
    .exec()
    .then((data) => {
      response.status(200).json(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/house/:location", async (request, response) => {
  const req_location = request.params.location;
  const location = req_location.charAt(0).toUpperCase() + req_location.slice(1);

  await House.find({ "house_location.province": location })
    .exec()
    .then((data) => {
      response.status(200).json(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/house/description/:id", async (request, response) => {
  await House.find({ _id: request.params.id })
    .exec()
    .then((data) => {
      response.status(200).json(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/api/house-search/:query", async (request, response) => {
  const provinces = [
    "Limpopo",
    "Eastern Cape",
    "Western Cape",
    "Mpumalanga",
    "Northern Cape",
    "Pretoria",
    "Johannesburg",
    "Port Elizabeth",
  ];
  const query = request.params.query;

  const result = [];
  for (let counter = 0; counter < provinces.length; counter++) {
    let currentProvince = provinces[counter];
    if (query.toLowerCase().includes(currentProvince.toLowerCase())) {
      result.push(currentProvince);
    }
  }

  House.find({ "house_location.province": result[0] })
    .exec()
    .then((data) => {
      return response.status(200).json(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
