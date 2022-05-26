const {
  getNationalHolidays,
  getCarnivalDatesFrom2020To2030,
} = require("../src/index");

describe("Tests", () => {
  beforeAll(() => {
    jest.setTimeout(30000);
  });

  test("getNationalHolidays deve retornar um erro quando o ano for inválido", async () => {
    expect.assertions(1);
    return expect(getNationalHolidays("ABC")).rejects.toEqual(
      "Erro ao calcular feriados."
    );
  });

  test("getNationalHolidays should return a promise", () => {
    expect(getNationalHolidays(2020)).toBeInstanceOf(Promise);
  });

  test("getNationalHolidays should return a promise with resolve for year 2020", () => {
    expect.assertions(1);
    return expect(getNationalHolidays(2020)).resolves.toEqual("2020-02-25");
  });

  test("getNationalHolidays should return a promise with resolve for year 2021", () => {
    expect.assertions(1);
    return expect(getNationalHolidays(2021)).resolves.toEqual("2021-02-16");
  });

  test("getNationalHolidays should return a promise with resolve for year 2022", () => {
    expect.assertions(1);
    return expect(getNationalHolidays(2022)).resolves.toEqual("2022-03-01");
  });

  test("getNationalHolidays should return a promise with resolve for year 2025", () => {
    expect.assertions(1);
    return expect(getNationalHolidays(2025)).resolves.toEqual("2025-03-04");
  });

  test("getNationalHolidays should return a promise with resolve for year 2027", () => {
    expect.assertions(1);
    return expect(getNationalHolidays(2027)).resolves.toEqual("2027-02-09");
  });

  test("getNationalHolidays should return a promise with resolve for year 2050", () => {
    expect.assertions(1);
    return expect(getNationalHolidays(2050)).resolves.toEqual("2050-02-22");
  });

  // deve checar se a função getCarnivalDatesFrom2020To2030 retorna uma promise

  test("getCarnivalDatesFrom2020To2030 should return a promise", () => {
    expect(getCarnivalDatesFrom2020To2030()).toBeInstanceOf(Promise);
  });

  test("getCarnivalDatesFrom2020To2030 should return a promise with resolve a array of dates of carnival", () => {
    expect.assertions(1);
    return expect(getCarnivalDatesFrom2020To2030()).resolves.toEqual([
      "2020-02-25",
      "2021-02-16",
      "2022-03-01",
      "2023-02-21",
      "2024-02-13",
      "2025-03-04",
      "2026-02-17",
      "2027-02-09",
      "2028-02-29",
      "2029-02-13",
      "2030-03-05",
    ]);
  });
});
