import { addYears, removeYears } from '.'

const date = new Date('2020-05-01')
const date2 = new Date('2020-05-01')
const date3 = new Date('2020-05-01')
const date4 = new Date('2020-05-01')

describe('formatToBrazilianDate', () => {
  it('should return added brazilian date ', () => {
    expect(addYears(5, date)).toBe('Thu, 01 May 2025 00:00:00 GMT')
  })

  it('should return added brazilian date with string param', () => {
    expect(addYears(15, date4)).toBe('Tue, 01 May 2035 00:00:00 GMT')
  })

  it('should return subscracted brazilian date with string param', () => {
    expect(removeYears(10, date2)).toBe('Sat, 01 May 2010 00:00:00 GMT')
  })

  it('should return subscracted brazilian date with string param', () => {
    expect(removeYears(5, date3)).toBe('Fri, 01 May 2015 00:00:00 GMT')
  })
})
