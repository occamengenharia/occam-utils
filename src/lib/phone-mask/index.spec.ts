import { PhoneMask } from '.'

describe('PhoneMask', () => {
  it('should present a telephone number in the correct mask for a cellphone number', () => {
    expect(PhoneMask('46 912345678')).toBe('46 9 1234-5678')
    expect(PhoneMask('46912345678')).toBe('46 9 1234-5678')
    expect(PhoneMask('(46)912345678')).toBe('46 9 1234-5678')
    expect(PhoneMask('(46) 91234 5678')).toBe('46 9 1234-5678')
    expect(PhoneMask('46912345678')).toBe('46 9 1234-5678')
    expect(PhoneMask('46 9 1234 5678')).toBe('46 9 1234-5678')
    expect(PhoneMask('46-91234-5678')).toBe('46 9 1234-5678')
  })
})
