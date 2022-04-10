import { IRemoveSpecials } from './types'

export const RemoveSpecials: IRemoveSpecials = input =>
  input.replace(/[^a-zA-Z0-9 ]/g, '')
