import { DateInvalid } from 'src/shared/errors/date-invalid'
import { IFormatDateToDB } from './types'

const INVALID_DATE = 'Invalid Date'

export const formatToDateDB: IFormatDateToDB = ({ date }) => {
  const dateObject = new Date(date)

  if (dateObject.toString() === INVALID_DATE)
    throw new DateInvalid(INVALID_DATE)

  const ano = dateObject.getFullYear()
  const mes = dateObject.getMonth() + 1
  const dia = dateObject.getDate()
  const hora = dateObject.getHours()
  const min = dateObject.getMinutes()
  const seg = dateObject.getSeconds()
  const result =
    ano + '-' + mes + '-' + dia + ' ' + hora + ':' + min + ':' + seg
  return result
}
