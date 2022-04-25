import { Methods } from '.'
import { IMethods } from './interface'

const makeSut = (): IMethods => Methods

describe('Methods', () => {
  it('should return all created methods', () => {
    const sut = makeSut()
    const methods = sut.getAllMethods()
    expect(methods).toBeDefined()
  })
})
