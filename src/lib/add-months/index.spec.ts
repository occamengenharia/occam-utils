import { DateInvalid } from 'src/shared/errors/date-invalid'
import { addMonths } from '.'

describe('AddMonths', () => {
  it('should add months to a date', () => {
    const date = new Date(2020, 1, 1)
    const result = addMonths(date, 1)
    expect(result.getMonth()).toBe(2)
  })

  it('should throw an error if the date is invalid', () => {
    const date = new Date('invalid')
    const months = 1
    expect(() => addMonths(date, months)).toThrowError(DateInvalid)
  })
})
