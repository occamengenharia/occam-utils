import { IMethods } from './interface'
import * as lib from 'src/lib'

export const Methods: IMethods = {
  getAllMethods: () => Object.keys(lib)
}
