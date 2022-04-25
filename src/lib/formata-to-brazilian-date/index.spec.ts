import { DateInvalid } from 'src/shared/errors/date-invalid'
import { formatToBrazilianDate } from '.'
import { IFormatToBrazilianDate } from './types'

type SutTypes = {
  sut: IFormatToBrazilianDate
  VALID_DATE: string
  INVALID_DATE: string
}

const makeSut = (): SutTypes => {
  const sut = formatToBrazilianDate
  const VALID_DATE = '2020-01-01'
  // * this is a invalid date object because date pattern is MM/DD/YYYY or YYYY-MM-DD
  const INVALID_DATE = '13/10/2020'

  return {
    sut,
    VALID_DATE,
    INVALID_DATE
  }
}

describe('formatToBrazilianDate', () => {
  it('should return correct brazilian date with date object param', () => {
    const { sut, VALID_DATE } = makeSut()
    expect(sut({ date: new Date(VALID_DATE) })).toBe('01/01/2020')
  })

  it('should return correct brazilian date with string param', () => {
    const { sut, VALID_DATE } = makeSut()
    expect(sut({ date: VALID_DATE })).toBe('01/01/2020')
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
