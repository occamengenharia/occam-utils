import { addDays, removeDays } from '.'

const date = new Date('2020-03-08')
const date2 = new Date('2020-03-08')
const date3 = new Date('2020-01-01')
const date4 = new Date('2022-02-15')
const date5 = new Date('2022-02-15')
const date6 = new Date('2022-02-28')
// * this is a invalid date object because date pattern is MM/DD/YYYY or YYYY-MM-DD

describe('formatToBrazilianDate', () => {
  it('should return added brazilian date ', () => {
    expect(addDays(5, date)).toBe('Fri, 13 Mar 2020 00:00:00 GMT')
  })

  it('should return subscracted brazilian date with string param', () => {
    expect(removeDays(5, date2)).toBe('Tue, 03 Mar 2020 00:00:00 GMT')
  })

  it('should return subscracted brazilian date with string param', () => {
    expect(removeDays(5, date3)).toBe('Fri, 27 Dec 2019 00:00:00 GMT')
  })

  it('should return added brazilian date with string param', () => {
    expect(addDays(15, date4)).toBe('Wed, 02 Mar 2022 00:00:00 GMT')
  })

  it('should return subscracted brazilian date with string param', () => {
    expect(removeDays(15, date5)).toBe('Mon, 31 Jan 2022 00:00:00 GMT')
  })

  it('should return added brazilian date with string param', () => {
    expect(addDays(1, date6)).toBe('Tue, 01 Mar 2022 00:00:00 GMT')
  })
})
