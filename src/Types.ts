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

export interface CrimeDataResponse {
  category: string;
  persistent_id: string;
  location_subtype: string;
  id: number;
  location: {
    latitude: string;
    street: {
      id: number;
      name: string;
    };
    longitude: string;
  };
  context: string;
  month: string;
  location_type: string;
  outcome_status: {
    category: string;
    date: string;
  };
}

export type CrimeCategories = {
  url: string;
  name: string;
};

export type CrimeCategoryTotals = {
  category: string;
  amount: number;
};
