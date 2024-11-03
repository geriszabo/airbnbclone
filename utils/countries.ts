import countries, { Country } from "world-countries";

type CountryCodeType = Country["cca2"];

export const formattedCountries = countries.map((country) => {
  return {
    code: country.cca2,
    name: country.name.common,
    flag: country.flag,
    location: country.latlng,
    region: country.region,
  };
});

export const findCountryByCode = (code: CountryCodeType) => {
  return formattedCountries.find((country) => country.code === code);
};
