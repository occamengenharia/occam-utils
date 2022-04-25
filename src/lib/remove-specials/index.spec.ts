import { removeSpecials } from '.'

describe('RemoveSpecials', () => {
  it('should remove all special characters', () => {
    expect(removeSpecials('abcd')).toBe('abcd')
    expect(removeSpecials('12345')).toBe('12345')
    expect(removeSpecials('1a2b3c4d5e')).toBe('1a2b3c4d5e')
    expect(removeSpecials('12345 ')).toBe('12345 ')
    expect(removeSpecials(' 12345 ')).toBe(' 12345 ')
    expect(removeSpecials('1$ovo%')).toBe('1ovo')
    expect(removeSpecials('t3st;')).toBe('t3st')
    expect(removeSpecials('5 &&teste%')).toBe('5 teste')
    expect(removeSpecials('6$#@!abcd*:%/?')).toBe('6abcd')
  })
})
