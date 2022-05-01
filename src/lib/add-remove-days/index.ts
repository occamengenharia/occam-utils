import { IAddDays, IRemoveDays } from './types'

export const addDays: IAddDays = (numberofDays, date) => {
  date.setDate(date.getDate() + numberofDays)
  return date.toUTCString()
}

export const removeDays: IRemoveDays = (numberofDays, date) => {
  date.setDate(date.getDate() - numberofDays)
  return date.toUTCString()
}
