export interface Account {
  id:            string;
  balance:       number;
  currentPage:   number;
  totalPages:    number;
  pageSize:      number;
  operationDtos: OperationDto[];
}

export interface OperationDto {
  id:            number;
  date:          Date;
  amount:        number;
  operationType: string;
  desciption:    string;
}
