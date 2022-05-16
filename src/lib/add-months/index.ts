import { DateInvalid } from 'src/shared/errors/date-invalid'
import { IAddMonths } from './types'

const INVALID_DATE = 'Invalid Date'

export const addMonths: IAddMonths = (input, months) => {
  if (input.toString() === INVALID_DATE) throw new DateInvalid(INVALID_DATE)

  const date = new Date(input)
  date.setMonth(date.getMonth() + months)
  return date
}
