export interface ICourseData {
  id: string;
  type: string;
  name: string;
  totalPrice: string;
  amount: string;
  address: string;
}

export interface ICourseResponse {
  code: number,
  msg: string
  datas: ICourseData[];
}
