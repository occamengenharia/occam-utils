import { DateInvalid } from 'src/shared/errors/date-invalid'
import { formatToDateDB } from '.'
import { IFormatDateToDB } from './types'

type SutTypes = {
  sut: IFormatDateToDB
  VALID_DATE: string
  INVALID_DATE: string
}

const makeSut = (): SutTypes => {
  const sut = formatToDateDB
  const VALID_DATE = '2022-05-15 18:45:59'
  // * this is a invalid date object because date pattern is MM/DD/YYYY or YYYY-MM-DD
  const INVALID_DATE = '15/05/2022 17:00:59'

  return {
    sut,
    VALID_DATE,
    INVALID_DATE
  }
}

describe('formatToBrazilianDate', () => {
  it('should return formatted date to DB with yyyy-mm-dd hh:mm:ss', () => {
    const { sut, VALID_DATE } = makeSut()
    expect(sut({ date: new Date(VALID_DATE) })).toBe('2022-5-15 18:45:59')
  })

  it('should return formatted date to DB with yyyy-mm-dd hh:mm:ss', () => {
    const { sut, VALID_DATE } = makeSut()
    expect(sut({ date: VALID_DATE })).toBe('2022-5-15 18:45:59')
  })

  it('should return invalid date error with invalid date object param', () => {
    const { sut, INVALID_DATE } = makeSut()
    const action = () => sut({ date: new Date(INVALID_DATE) })
    expect(action).toThrow(DateInvalid)
  })

  it('should return invalid date error with invalid string param', () => {
    const { sut, INVALID_DATE } = makeSut()
    const action = () => sut({ date: INVALID_DATE })
    expect(action).toThrow(DateInvalid)
  })
})
