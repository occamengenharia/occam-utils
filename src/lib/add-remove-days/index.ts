import { IAddDays, IRemoveDays } from './types'

export const addDays: IAddDays = (numberofDays, date) => {
  date.setDate(date.getDate() + numberofDays) //o 1 serve para mostrar a data em que parou corretamente
  const dias = date.getDate()
  const mes = date.getMonth() + 1
  const ano = date.getFullYear()
  const resposta = ano + '-' + mes + '-' + dias
  return resposta
}

export const removeDays: IRemoveDays = (numberofDays, date) => {
  date.setDate(date.getDate() - numberofDays)
  const dias = date.getDate()
  const mes = date.getMonth() + 1
  const ano = date.getFullYear()
  const resposta = ano + '-' + mes + '-' + dias
  return resposta
}
