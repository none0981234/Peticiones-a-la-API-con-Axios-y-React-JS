import { AxiosError } from "axios";
import { ResponseAPI, client } from "../api/client";

export const getPosts = async (): Promise<ResponseAPI[]> => {
  try {
    const { data } = await client.get<ResponseAPI[]>("?_limit=6");
    return data;
  } catch (error) {
    const err = error as AxiosError
    console.log(err.message)
    console.log(err.name)

    return []
  }

};
