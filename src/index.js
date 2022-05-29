/*

Para este exercício utilize o recurso de Promises do Javascript.
Será necessário buscar as informações em uma api de feriados nacionais.
Baixar o resultado, tratar o retorno de acordo com o que cada função deve retornar.

Documentação da API: https://brasilapi.com.br/docs#tag/Feriados-Nacionais

*/

const axios = require ('axios');
const BASE_API_NATIONAL_HOLIDAYS = "https://brasilapi.com.br/api/feriados/v1/";

/*
    TODO 1:
    Implemente a função abaixo (getNationalHolidays) para que ela retorne uma promise
    com o resolve da data do carnaval de acordo com o ano passado como parâmetro.
    A função deve buscar a informação da data na api de Feriados-Nacionais
    
    exemplo de como seria usada: 
      getNationalHolidays(2020).then(data => {
        console.log(data); // 2020-02-25
      });

*/

function getNationalHolidays(year) {
  // implemente aqui
  const holidays = new Promise (async (resolve, reject) => {
    try {
      const holidayResult = await axios.get(`${BASE_API_NATIONAL_HOLIDAYS}/${year}`);
      holidayResult.data.forEach(holiday => {
        if (holiday.name == "Carnaval"){
          resolve(`${holiday.date}`);
        } ;
      });
    } catch (error) {
      console.log("Ocorreu um erro", error);
      reject("Erro ao calcular feriados.");
    }
  })
  return holidays;
}

getNationalHolidays(2020).then(data => {
  // console.log(data);
});

/* 
    TODO 2:
    Implemente a função abaixo (getCarnivalDatesFrom2020To2030) para que ela retorne uma promise
    com o resolve de um array com as datas de carnaval do período de 2020 a 2030.
    A função deve buscar a informação da data na api de Feriados-Nacionais


*/
function getCarnivalDatesFrom2020To2030() {
  // implemente aqui
  const years = [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];

  const getCarnivalDates = new Promise (async (resolve, reject) => {
    try {
      const holidays = years.map((year) => {
        getNationalHolidays(year).toString()
      })

      const dates = await Promise.all(holidays);
      resolve(dates);
      console.log("promises", dates);

    } catch (error) {
      console.log('Ocorreu um erro', error);
      reject (error);
    }
})
  return getCarnivalDates
}

getCarnivalDatesFrom2020To2030()

module.exports = {
  getNationalHolidays,
  getCarnivalDatesFrom2020To2030,
};
