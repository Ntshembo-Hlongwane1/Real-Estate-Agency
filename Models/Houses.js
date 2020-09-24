const mongoose = require("mongoose");

const HouseSchema = mongoose.Schema({
  owner: {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    idNumber: { type: Number, required: true },
    phoneNumber: { type: Number, required: true },
    email: { type: String, required: true },
  },
  house_location: {
    province: { type: String, required: true },
    street: { type: String, required: true },
  },
  house_properties: {
    sale_or_rent: { type: String, required: true },
    housePrice: { type: Number, required: true },
    bedroomNumber: { type: Number, required: true },
    garages: { type: Number, required: true },
    pool: { type: Boolean, required: true },
    bathroomNumber: { type: Number, required: true },
    petFriendly: { type: Boolean, required: true },
    houseImage: { type: String, required: true },
  },
});

const House = mongoose.model("House", HouseSchema);

module.exports = House;
