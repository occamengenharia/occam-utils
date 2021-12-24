import * as API from '.'

describe('Public API', () => {
  const methods = ['onlyNumbers']

  Object.keys(API).forEach(method => {
    it(`${method} is available in the Public API`, () => {
      expect(methods).toContain(method)
    })
  })
})
