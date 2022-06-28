import axios from "axios";
import {
  TCreateRequestParams,
  TCreateRequestRequestData,
  TCreateRequestResponseData,
} from "./types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://10.117.1.103:9000/";

export const restCreateRequestData = ({
  payload,
  params,
}: {
  payload: TCreateRequestRequestData;
  params: TCreateRequestParams;
}): Promise<TCreateRequestResponseData> => {
  return axios
    .post<TCreateRequestResponseData>(
      `${BASE_URL}/requests/actions/add`,
      payload,
      {
        headers: {},
        params,
      }
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
