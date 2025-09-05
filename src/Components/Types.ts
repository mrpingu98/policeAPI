export interface Routes {
  name: string;
  routeUrl: string;
}

export type NonEmptyArray<T> = [T, ...T[]];

export interface LatLng {
  lat: number;
  lng: number;
}

export class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NetworkError";
  }
}

export class HttpError extends Error {
  status: number;

  constructor(status: number, responseErrorMessage: string) {
    super(`Http Error: ${status} - ${responseErrorMessage}`);
    this.status = status;
    this.name = "HttpError";
  }
}
