const user = {
  name: "Evez",
  surname: "Memmedli",
  location: {
    lat: "123123.2",
    lng: "123123.2",
    country: {
      name: "Azerbaijan",
      city: {
        name: "Baku",
        district: "Khatai",
      },
    },
  },
};

// const { location } = user;
// const { country } = location;
// const { city } = country;
// const { name, district } = city;

const {
  name: userName,
  surname,
  location: {
    lat,
    lng,
    country: {
      name: countryName,
      city: { name: cityName, district },
    },
  },
} = user;

const users = ["Hello", "World", "!"];

const [, , myThirdStr] = users;

console.log(myThirdStr);
