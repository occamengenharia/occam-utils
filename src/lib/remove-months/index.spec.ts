import { DateInvalid } from 'src/shared/errors/date-invalid'
import { removeMonths } from '.'

describe('RemoveMonths', () => {
  it('should remove months to a date', () => {
    const date = new Date(2020, 1, 1)
    const result = removeMonths(date, 1)
    expect(result.getMonth()).toBe(12)
  })

  it('should throw an error if the date is invalid', () => {
    const date = new Date('invalid')
    const months = 1
    expect(() => removeMonths(date, months)).toThrowError(DateInvalid)
  })
})
