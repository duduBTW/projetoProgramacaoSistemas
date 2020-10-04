export interface EmployeeDomain {
  Id: number;
  Name: string;
  Photo: string;
  Birth: Date | string;
  Admission: Date | string | null;
  Dismissal: string;
  FunctionStart: string;
  FunctionStart_Month: number | null;
  FunctionStart_Year: number | null;
  FunctionTime: number | null;
  Gender: number | null;
  Gender_Description: string;
  MaritalStatus: number | null;
  MaritalStatus_Description: string;
  Status: number | null;
  Status_Description: string;
  Document_RG: string;
  Document_CPF: string;
  Document_Matricula: string;
  Document_CTPS: string;
  Document_NIT: string;
  Phone_Type: string;
  Phone_DDD: string;
  Phone_Number: string;
  Phone_Type1: string;
  Phone_DDD1: string;
  Phone_Number1: string;
  Address_Type: string;
  Address: string;
  Address_Number: string;
  Address2: string;
  Address_Neighborhood: string;
  Address_City: string;
  Address_State: string;
  Address_ZipCode: string;
  Signature: string;
  Integration_Code: string;
  Function: EmployeeFunctionDomain;
  Department: EmployeeDepartmentDomain;
  CompanyName: string;
}

export interface employeeItem {
  FUNNOME: string;
  FUNCPF?: number;
  FUNMATRICULA?: number;
  FUNRG?: number;
  FUNADMISSAO: string;
  FUNNASCIMENTO: string;
}
