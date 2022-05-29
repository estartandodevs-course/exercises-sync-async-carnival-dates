const BASE_API_NATIONAL_HOLIDAYS = "https://brasilapi.com.br/api/feriados/v1/";
const axios = require('axios')

async function getNationalHolidays(year) {
 const holydaysPromise = new Promise( async (resolve,reject) => {
    try {
      const response = await axios.get(`${BASE_API_NATIONAL_HOLIDAYS}/${year}`);
      const result = await response.data[1].date
      resolve(result)
    }   
    catch (error) {
      reject(error.response.data.message)
    }
  })
  return (holydaysPromise)
} 
getNationalHolidays(2020)


async function getCarnivalDatesFrom2020To2030(startingYear = 2020,finalYear = 2030) {
  const dates = []
  for (let i = startingYear; i <= finalYear; i++){
    dates.push(i)
  }
  let results = dates.map((year) => getNationalHolidays(year));
  return Promise.all(results);
}


module.exports = {
  getNationalHolidays,
  getCarnivalDatesFrom2020To2030,
};

