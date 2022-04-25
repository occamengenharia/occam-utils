export interface IMethods {
  getAllMethods: IGetAllMethods
}

export type IGetAllMethods = () => string[]
