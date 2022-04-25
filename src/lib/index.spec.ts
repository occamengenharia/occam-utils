import { Methods } from 'src/test/utils/methods'
import * as lib from '.'

type ILib = typeof lib
lib as ILib
const methods = Methods.getAllMethods()
describe('lib', () => {
  it('should be defined', () => {
    expect(lib).toBeDefined()
  })

  methods.forEach(method => {
    it(`${method} is available in the lib`, () => {
      expect(lib).toHaveProperty(method)
    })
  })
})
