import { cnpjMask } from '.'

const availableCnpj = {
  unformatted: '00000000000000',
  formatted: '00.000.000/0000-00',
  incomplete: '0000000000',
  withLetters: 'a0000000a0000000a',
  withSpecialChars: '@00000000000000@'
}

describe('CnpjMask', () => {
  it('should format cnpj', () => {
    expect(cnpjMask(availableCnpj.unformatted)).toBe(availableCnpj.formatted)
    expect(cnpjMask(availableCnpj.formatted)).toBe(availableCnpj.formatted)
  })

  it('should not format cnpj when dont have correct all digits', () => {
    expect(cnpjMask(availableCnpj.incomplete)).toBe(availableCnpj.incomplete)
    expect(cnpjMask(availableCnpj.withLetters)).toBe(availableCnpj.withLetters)
    expect(cnpjMask(availableCnpj.withSpecialChars)).toBe(
      availableCnpj.withSpecialChars
    )
  })
})
