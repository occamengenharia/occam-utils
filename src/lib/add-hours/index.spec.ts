import { DateInvalid } from 'src/shared/errors/date-invalid'
import { addHours } from '.'

describe('AddHours', () => {
  it('should add hours to a date', () => {
    const date = new Date('2020-01-01')
    const hours = 1
    const result = addHours(date, hours)
    expect(result).toEqual(new Date('2020-01-01T01:00:00.000Z'))
  })

  it('should throw an error if the date is invalid', () => {
    const date = new Date('invalid')
    const hours = 1
    expect(() => addHours(date, hours)).toThrowError(DateInvalid)
  })
})
