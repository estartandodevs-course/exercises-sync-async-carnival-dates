const axios = require("axios")

/*

Para este exercício utilize o recurso de Promises do Javascript.
Será necessário buscar as informações em uma api de feriados nacionais.
Baixar o resultado, tratar o retorno de acordo com o que cada função deve retornar.

Documentação da API: https://brasilapi.com.br/docs#tag/Feriados-Nacionais

*/


const BASE_API_NATIONAL_HOLIDAYS = "https://brasilapi.com.br/api/feriados/v1";

async function getNationalHolidays(year) {


  try {
    const url = `${BASE_API_NATIONAL_HOLIDAYS}/${year}`

    const response = await axios.get(url)

    const holidays = response.data

    const onlyCarnavalList = holidays.filter(
      (holiday) => holiday.name === 'Carnaval'
    )

    const [carnival] = onlyCarnavalList

    //return carnival.date
    return Promise.resolve(carnival.date)

  } catch (err) {
    return Promise.reject("Erro ao calcular feriados.")
  }

}
// getNationalHolidays(2023).then((data) => {
//   console.log(data)
//   console.log('DESAFIO 1')
//})



/* 
    TODO 2:
    Implemente a função abaixo (getCarnivalDatesFrom2020To2030) para que ela retorne uma promise
    com o resolve de um array com as datas de carnaval do período de 2020 a 2030.
    A função deve buscar a informação da data na api de Feriados-Nacionais


*/


function getCarnivalDatesFrom2020To2030() {

// const somaAnos = (valor,indice) => {
//   return 2020+indice
// } 
//   console.log('somaAnos ', somaAnos(undefined,0), somaAnos(undefined,15))

  const years = Array.from({length:11}, (value,index) => 2020+index)

//  console.log(years)

  const carnivalListProms = years.map((value,index) => getNationalHolidays(2020+index))

  return Promise.all(carnivalListProms)

}

getCarnivalDatesFrom2020To2030().then(resultado => console.log(resultado))

module.exports = {
  getNationalHolidays,
  getCarnivalDatesFrom2020To2030,
};