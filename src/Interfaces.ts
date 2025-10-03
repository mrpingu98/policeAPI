import { CrimeCategories, CrimeDataResponse, LatLng, Routes } from "./Types";

export interface ButtonProps {
  text: string;
  variant: "primary" | "secondary";
  onClick: () => void;
  dataTestId?: string;
  disabled?: boolean;
}

export interface CrimeDataProps {
  title: string;
  crimeData: CrimeDataResponse[];
  isFetching: boolean;
  categories: CrimeCategories[];
}

export interface DatePickerMonthProps {
  setDate: React.Dispatch<React.SetStateAction<string>>;
  name?: string;
  min?: string;
  max?: string;
}

export interface ErrorProps {
  errorMessage: string;
}

export interface MapProps {
  setLatitudeLongitude: React.Dispatch<React.SetStateAction<LatLng | undefined>>;
}

export interface DropdownProps {
  routesArray: Routes[];
}

export interface RecentNewsItemProps {
  title: string;
  imageSource: string;
  alternativeImageText: string;
  mainNewsItem?: boolean;
}

export interface RelatedContentItemProps {
  imageSource: string;
  title: string;
  alternativeImageText: string;
  href: string;
}

export interface NavbarDropdownButtonProps {
  onClick: () => void;
}
