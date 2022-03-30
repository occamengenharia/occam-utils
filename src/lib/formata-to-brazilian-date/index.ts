import { DateInvalid } from 'src/shared/errors/date-invalid'
import { IFormatToBrazilianDate } from './types'

const INVALID_DATE = 'Invalid Date'

export const formatToBrazilianDate: IFormatToBrazilianDate = ({ date }) => {
  const dateObject = new Date(date)

  if (dateObject.toString() === INVALID_DATE)
    throw new DateInvalid(INVALID_DATE)

  return new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: 'UTC'
  }).format(dateObject)
}
