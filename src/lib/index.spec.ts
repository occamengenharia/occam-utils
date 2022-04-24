import * as lib from '.'

describe('lib', () => {
  it('should export functions', () => {
    expect(lib).toBeDefined()
    expect(lib.onlyNumbers).toBeDefined()
    expect(lib.cnpjMask).toBeDefined()
    expect(lib.formatToBrazilianDate).toBeDefined()
    expect(lib.phoneMask).toBeDefined()
    expect(lib.removeSpecials).toBeDefined()
  })
})
