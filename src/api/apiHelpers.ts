import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { baseUrl } from "../constants/api";
import { KeyValue } from "../Interfaces";

export function queryParamsHelperFunction(baseUrl: string, queryParameters: KeyValue[]) {
  const joinKeyValuePairs = queryParameters.map((object) => `${object.key}=${object.value}`);
  const joinAllQueryParams = joinKeyValuePairs.join("&");
  const requestUrl = `${baseUrl}?${joinAllQueryParams}`;

  return requestUrl;
}

export async function getRequest(urlAffix: string, queryParameters?: KeyValue[]) {
  const response = await fetch(
    queryParameters ? queryParamsHelperFunction(`${baseUrl}${urlAffix}`, queryParameters) : `${baseUrl}${urlAffix}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! Status ${response.status}`);
  }
  return response.json();
}

export function queryResult<T>(query: UseQueryResult<T, Error>) {
  const { data, isFetching, isError, error, refetch } = query;

  return {
    loading: isFetching,
    error,
    dataFetched: data && !isError && !isFetching,
    data: data ? data : null,
    isError: isError && !isFetching,
    refetch,
  };
}

export function useGetQuery(queryKey: string, apiEndpoint: string, queryParameters?: KeyValue[]) {
  return useQuery({
    queryKey: [queryKey],
    queryFn: () => getRequest(apiEndpoint, queryParameters),
    enabled: false,
  });
}
