import axios from "axios";
import { Params } from "./types";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://e69d6d0b-5684-4da2-862a-79ca488d5507.mock.pstmn.io";

export const restGetListRequestData = ({
  params,
}: {
  params: Params;
}): Promise<any> => {
  return axios
    .get(
      `${BASE_URL}/requests/list?channel_id=${params.channel}&register_id_or_nik=${params.nikOrReqId}&status=${params.status}&page=${params.page}&limit=${params.limit}&success=true`
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
