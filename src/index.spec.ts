import * as API from '.'
import { Methods } from 'src/test/utils/methods'

describe('Public API', () => {
  const methods = Methods.getAllMethods()

  Object.keys(API).forEach(method => {
    it(`${method} is available in the Public API`, () => {
      expect(methods).toContain(method)
    })
  })
})
