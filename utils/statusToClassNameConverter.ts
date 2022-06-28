import { TCreateRequestResponseData } from "infrastructure/rest/create-request/types";

export const statusToClassNameConverter = (
  status: TCreateRequestResponseData["data"]["status"]
): string => {
  switch (status) {
    case "Cek NIK":
      return "badge-status-cek-nik";
    case "Daftar":
      return "badge-status-daftar";
    case "Dalam Proses":
      return "badge-status-dalam-proses";
    case "Terdaftar":
      return "badge-status-terdaftar";
    case "Penautan":
      return "badge-status-terdaftar";
    case "Tertaut":
      return "badge-status-tertaut";
    case "Kadaluarsa":
      return "badge-status-kadaluarsa";
    default:
      return "";
  }
};
