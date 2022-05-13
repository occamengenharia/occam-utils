import { DateInvalid } from 'src/shared/errors/date-invalid'
import { IRemoveHours } from './types'

const INVALID_DATE = 'Invalid Date'

export const removeHours: IRemoveHours = (input, hours) => {
  if (input.toString() === INVALID_DATE) throw new DateInvalid(INVALID_DATE)

  const date = new Date(input)
  date.setHours(date.getHours() - hours)
  return date
}
