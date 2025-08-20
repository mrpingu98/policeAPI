export interface Routes {
  name: string;
  routeUrl: string;
}

export type NonEmptyArray<T> = [T, ...T[]];

export interface LatLng {
  lat: number;
  lng: number;
}
