const axios = require('axios');
const BASE_API_NATIONAL_HOLIDAYS = "https://brasilapi.com.br/api/feriados/v1/";


function getNationalHolidays(year) {
  return new Promise((resolve, reject) => {
    axios.get(`${BASE_API_NATIONAL_HOLIDAYS}${year}`)
    .then((res) => {
      Object.values(res.data).forEach((holiday) => {
        holiday.name === "Carnaval" ?
        resolve(holiday.date) : null;
      })
    })
    .catch((err) => {
      reject("Erro ao calcular feriados.");
    });
});
}

function getCarnivalDatesFrom2020To2030() {
  const years = [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];
  const canarvalDates = years.map((year) => getNationalHolidays(year));
  return Promise.all(canarvalDates);
}


module.exports = {
  getNationalHolidays,
  getCarnivalDatesFrom2020To2030,
};

