import { DateInvalid } from 'src/shared/errors/date-invalid'
import { removeHours } from '.'

describe('RemoveHours', () => {
  it('should remove hours to a date', () => {
    const date = new Date('2020-01-01')
    const hours = 1
    const result = removeHours(date, hours)
    expect(result).toEqual(new Date('2019-12-31T23:00:00.000Z'))
  })

  it('should throw an error if the date is invalid', () => {
    const date = new Date('invalid')
    const hours = 1
    expect(() => removeHours(date, hours)).toThrowError(DateInvalid)
  })
})
