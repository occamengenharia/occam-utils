import { IAddYears, IRemoveYears } from './types'

export const addYears: IAddYears = (numberofYears, date) => {
  date.setUTCFullYear(date.getFullYear() + numberofYears)
  return date.toUTCString()
}

export const removeYears: IRemoveYears = (numberofYears, date) => {
  date.setUTCFullYear(date.getFullYear() - numberofYears)
  return date.toUTCString()
}
