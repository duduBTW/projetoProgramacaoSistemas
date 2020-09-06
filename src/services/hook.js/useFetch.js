import useSWR from "swr";
import { instance } from "services/api";
export function useFetch(url) {
  const { data, error } = useSWR(url, async (url) => {
    const response = await instance.get(url);

    return response.data;
  });

  return { data, error };
}
