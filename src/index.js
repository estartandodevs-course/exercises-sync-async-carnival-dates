/*

Para este exercício utilize o recurso de Promises do Javascript.
Será necessário buscar as informações em uma api de feriados nacionais.
Baixar o resultado, tratar o retorno de acordo com o que cada função deve retornar.

Documentação da API: https://brasilapi.com.br/docs#tag/Feriados-Nacionais

*/
const axios = require('axios');

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

async function getNationalHolidays(year) {
  // implemente aqui
  return new Promise (async(resolve, reject) => {
    try{
      const response = await axios.get(BASE_API_NATIONAL_HOLIDAYS + `${year}`);
      const json = response.data;
      const [carnival] = json.filter((item)=>{
        return item.name === 'Carnaval'
      })
      const {date} = carnival;
      resolve(date);
    }catch(e){
      reject("Erro ao calcular feriados.")
    }
  })
}

// getNationalHolidays(2023).then((res) => {console.log(res)})

/* 
    TODO 2:
    Implemente a função abaixo (getCarnivalDatesFrom2020To2030) para que ela retorne uma promise
    com o resolve de um array com as datas de carnaval do período de 2020 a 2030.
    A função deve buscar a informação da data na api de Feriados-Nacionais


*/
async function getCarnivalDatesFrom2020To2030() {
  // implemente aqui
  const dates = [];
  return new Promise( async (resolve, reject) =>{
    for ( let i = 2020; i < 2031; i++){
      const year = i;
      try {
        const response = await axios(BASE_API_NATIONAL_HOLIDAYS + `${year}`)
        const json = response.data;
        const [carnival] = json.filter((item) =>{
          return item.name === 'Carnaval';
        })
        const {date} = carnival;
        dates.push(date);
        if(i=== 2030){
          resolve(dates);
        }
      } catch(e){
        reject('Erro:', e);
      }
    }
  })
}

module.exports = {
  getNationalHolidays,
  getCarnivalDatesFrom2020To2030,
};
