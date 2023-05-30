export interface IShopping {
  pid: number;
  selected: number;
  img: string;
  info: string;
  arguments: string;
  price: number;
  num: number;
  total: number;
  deleted: number;
}

export interface IGoods {
  arguments: Array<string>;
  double11: number;
  icons: IICons;
  img: string;
  info: string;
  judge: number;
  list: Array<IGoodsItem>;
  pid: number;
  schedule: ISchedule | null;
  shop: string;
}

export interface IICons {
  icon1?: Array<string>;
  icon2?: Array<string>;
  icon3?: Array<string>;
  icon4?: Array<string>;
}

export interface IGoodsItem {
  id: number;
  img: string;
  price: number;
}
export interface ISchedule {
  img: string | null;
  info: string | null;
}
