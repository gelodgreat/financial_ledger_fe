export interface GenericResponse<Data = any> {
  status: number;
  message: string;
  data: Data;
}
