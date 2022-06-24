import axios from "axios";
import { Params } from "./types";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://d6f8601e-6939-4658-8a8e-c1394707340b.mock.pstmn.io";

export const restGetListRequestData = ({
  params,
}: {
  params: Params;
}): Promise<any> => {
  console.log(params)
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
