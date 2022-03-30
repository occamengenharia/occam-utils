import { formatCpf } from '.'

describe('formatCpf', () => {
  it('should return number with CPF format', () => {
    const cpf = '12345678901'
    expect(formatCpf(cpf)).toBe('123.456.789-01')
  })

  it('should dont return number with CPF format', () => {
    const incompleteCpf = '123456789'
    const cpfWithLetter = '1a23456789a'
    const cpfWithSpecialCharacter = '123456789@'

    expect(formatCpf(incompleteCpf)).toBe('123456789')
    expect(formatCpf(cpfWithLetter)).toBe('123456789')
    expect(formatCpf(cpfWithSpecialCharacter)).toBe('123456789')
  })
})