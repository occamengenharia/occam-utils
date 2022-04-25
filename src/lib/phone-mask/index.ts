import { IPhoneMask } from './types'

export const phoneMask: IPhoneMask = input =>
  input.replace(/\D/g, '').replace(/(\d{2})(\d{1})(\d{4})(\d)/, '$1 $2 $3-$4')
