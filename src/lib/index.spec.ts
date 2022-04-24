import { Methods } from 'src/test/utils/methods'
import * as lib from '.'

const methods = Methods.getAllMethods()
describe('lib', () => {
  it('should be defined', () => {
    expect(lib).toBeDefined()
  })

  Object.keys(lib).forEach(method => {
    it(`${method} is available in the lib`, () => {
      expect(methods).toContain(method)
    })
  })
})
