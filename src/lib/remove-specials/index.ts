import { IRemoveSpecials } from './types'

export const removeSpecials: IRemoveSpecials = input =>
  input.replace(/[^a-zA-Z0-9 ]/g, '')
