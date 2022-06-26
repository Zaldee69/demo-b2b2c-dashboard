export interface TListRequestResponseData {
  count: number;
  rows: Row[];
}

export interface Row {
  id: string;
  channel_id: string;
  request_id: string;
  tilaka_name: string;
  nik: string;
  status: Status;
  custom_data: any;
  is_expired: boolean;
  createdAt: Date;
  updatedAt: Date;
  Channel: Channel;
}

export interface Channel {
  id: string;
  name: string;
  secret: string;
  redirect_url: string;
  createdAt: Date;
  updatedAt: Date;
}

 type Status = {
  status :
    | "Cek Nik"
    | "Daftar"
    | "Dalam Proses"
    | "Terdaftar"
    | "Penautan"
    | "Tertaut"
    | "Kadaluarsa" | any
}

export type Params = {
  channel?: string;
  nikOrReqId?: string;
  page?: string;
  limit?: string;
  status : any
} 
