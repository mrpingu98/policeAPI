import { baseUrl } from "../constants/api";

interface KeyValue {
  key: string;
  value: string;
}

export function queryParamsHelperFunction(
  baseUrl: string,
  queryParameters: KeyValue[]
) {
  const joinKeyValuePairs = queryParameters.map(
    (object) => `${object.key}=${object.value}`
  );
  const joinAllQueryParams = joinKeyValuePairs.join("&");
  const requestUrl = `${baseUrl}?${joinAllQueryParams}`;

  return requestUrl;
}

export async function getRequest(queryParameters: KeyValue[]) {
  try {
    const response = await fetch(
      queryParamsHelperFunction(baseUrl, queryParameters)
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}
