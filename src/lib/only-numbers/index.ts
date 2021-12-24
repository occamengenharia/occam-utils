import { IOnlyNumbers } from './types'

export const onlyNumbers: IOnlyNumbers = input =>
  String(input).replace(/[^\d]/g, '')
