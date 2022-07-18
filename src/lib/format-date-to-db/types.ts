export type IFormatDateToDBParams = {
  date: Date | string
}

export type IFormatDateToDB = (params: IFormatDateToDBParams) => string
