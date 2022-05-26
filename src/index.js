const BASE_API_NATIONAL_HOLIDAYS = "https://brasilapi.com.br/api/feriados/v1/";
const axios = require('axios')

function getNationalHolidays(year) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_API_NATIONAL_HOLIDAYS}/${year}`)
      .then(res => {
        resolve(res.data[1].date);
      })
      .catch((error) => {
        reject(error.message = 'Erro ao calcular feriados.')
      })
  })
}

const getCarnivalDatesFrom2020To2030 = () => {
  arrayDatas = [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030]
  const datas = arrayDatas.map((data) => getNationalHolidays(data))
  return Promise.all(datas)
}

module.exports = {
  getNationalHolidays,
  getCarnivalDatesFrom2020To2030,
};
