export type TCreateRequestRequestData = {
  channel_id?: string;
  nik?: string; // when type === signing
  tilaka_name?: string; // when type === check_nik
};

export type TCreateRequestResponseData = {
  error: string | null;
  data: {
    request_id: string | null;
    status:
      | "Cek NIK"
      | "Daftar"
      | "Dalam Proses"
      | "Terdaftar"
      | "Penautan"
      | "Tertaut"
      | "Kadaluarsa";
    redirect_url: string;
  };
  message: string | null;
};

export type TCreateRequestParams = {
  redirect_url?: string;
  type: "signing" | "check_nik";
  success_check_nik?: boolean;
};
