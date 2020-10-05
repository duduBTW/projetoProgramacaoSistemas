import useSWR from "swr";
import { instance } from "services/api";
export function useFetch<Data = any>(url: string) {
  const { data, error } = useSWR<Data>(url, async (url) => {
    const response = await instance.get(url);

    return response.data;
  });

  return { data, error };
}
