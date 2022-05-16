import { DateInvalid } from 'src/shared/errors/date-invalid'
import { removeMonths } from '.'

describe('RemoveMonths', () => {
  it('should remove months to a date', () => {
    const date = new Date('2021-01-01 00:00:00')
    const months = 1
    const result = removeMonths(date, months)
    expect(result).toEqual(new Date('2020-12-01 00:00:00'))
  })

  it('should throw an error if the date is invalid', () => {
    const date = new Date('invalid')
    const months = 1
    expect(() => removeMonths(date, months)).toThrowError(DateInvalid)
  })
})
