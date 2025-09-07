import { baseUrl } from "../constants/api";
import { NetworkError, HttpError } from "../Components/Types";

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

export async function getRequest(
  urlAffix: string,
  queryParameters?: KeyValue[]
) {
  try {
    const response = await fetch(
      queryParameters
        ? queryParamsHelperFunction(`${baseUrl}${urlAffix}`, queryParameters)
        : `${baseUrl}${urlAffix}`
    );
    //-- HTTP error
    if (!response.ok) {
      let errorMessage = "Unknown error details";
      try {
        const data = await response.json();
        if (data?.error) errorMessage = data.error;
      } catch {
        //ignore error
      }
      throw new HttpError(response.status, errorMessage);
    }
    //-- Success
    const data = await response.json();
    return data;
  } catch (err: unknown) {
    if (err instanceof HttpError) {
      throw err;
    }
    //-- Network error
    if (err instanceof Error) {
      throw new NetworkError(`Network error ${err.message}`);
    }
    throw new Error("Network error occurred");
  }
}

//doesnt seem to get err as an Error type - use reponse.status ==== code - then return specific message
//error only pciked up if url was wrong say

//catch within this part here

//professional project would have an error boundary - throw errors, boundary catches them and shows an error screen
//catch - type of exception - to handle specific errors catch
