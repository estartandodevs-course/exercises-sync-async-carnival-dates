const axios = require('axios');
const BASE_API_NATIONAL_HOLIDAYS = "https://brasilapi.com.br/api/feriados/v1/";

function getNationalHolidays(year) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_API_NATIONAL_HOLIDAYS}${year}`)
      .then((res) => {
        resolve(res.data[1].date);
      })
      .catch((err) => {
        reject("Erro ao calcular feriados.", err);
      })
  });
};

function getCarnivalDatesFrom2020To2030(){
  const anos = [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030]
  const all = anos.map((value) => getNationalHolidays(value))

  return Promise.all(all).then(res => {
    console.log(res)
  });
} 

getCarnivalDatesFrom2020To2030(); //sempre da unhandled rejection

module.exports = {
  getNationalHolidays,
  getCarnivalDatesFrom2020To2030,
};
