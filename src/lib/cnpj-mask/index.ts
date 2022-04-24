import { ICnpjMask } from './types'

const CNPJ_REGEX = /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/

export const cnpjMask: ICnpjMask = (input: string) =>
  input.replace(CNPJ_REGEX, '$1.$2.$3/$4-$5')
