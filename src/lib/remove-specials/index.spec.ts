import { RemoveSpecials } from '.'

describe('RemoveSpecials', () => {
  it('should remove all special characters', () => {
    expect(RemoveSpecials('abcd')).toBe('abcd')
    expect(RemoveSpecials('12345')).toBe('12345')
    expect(RemoveSpecials('1a2b3c4d5e')).toBe('1a2b3c4d5e')
    expect(RemoveSpecials('12345 ')).toBe('12345 ')
    expect(RemoveSpecials(' 12345 ')).toBe(' 12345 ')
    expect(RemoveSpecials('1$ovo%')).toBe('1ovo')
    expect(RemoveSpecials('t3st;')).toBe('t3st')
    expect(RemoveSpecials('5 &&teste%')).toBe('5 teste')
    expect(RemoveSpecials('6$#@!abcd*:%/?')).toBe('6abcd')
  })
})
