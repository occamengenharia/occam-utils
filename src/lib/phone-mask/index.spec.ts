import { phoneMask } from '.'

describe('PhoneMask', () => {
  it('should present a telephone number in the correct mask for a cellphone number', () => {
    expect(phoneMask('46 912345678')).toBe('46 9 1234-5678')
    expect(phoneMask('46912345678')).toBe('46 9 1234-5678')
    expect(phoneMask('(46)912345678')).toBe('46 9 1234-5678')
    expect(phoneMask('(46) 91234 5678')).toBe('46 9 1234-5678')
    expect(phoneMask('46912345678')).toBe('46 9 1234-5678')
    expect(phoneMask('46 9 1234 5678')).toBe('46 9 1234-5678')
    expect(phoneMask('46-91234-5678')).toBe('46 9 1234-5678')
  })
})
