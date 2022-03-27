import { IRemoveSpecials } from './types'

export const RemoveSpecials: IRemoveSpecials = input =>
  String(input).replace(/[^a-zA-Z0-9 ]/g, '')
