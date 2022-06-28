import axios from "axios";
import { TCreateRequestRequestData, TCreateRequestResponseData} from "./types";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://10.117.1.103:9000/";

export const restCreateRequest = ({
  params,
}: {
  params: TCreateRequestRequestData;
}): Promise<TCreateRequestResponseData> => {
  return axios
    .post(
      `${BASE_URL}/requests/actions/add?type=${params.type}&redirect_url=${params.redirect_url}`, params
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
