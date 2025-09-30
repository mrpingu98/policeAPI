import { CrimeCategories, CrimeCategoryTotals, CrimeDataResponse } from "../../Types";

export function getNumberOfCrimesByCategory(categories: CrimeCategories[], crimeData: CrimeDataResponse[]) {
  const numberOfCrimesByCategory: CrimeCategoryTotals[] = [];
  categories.forEach(
    (category) =>
      category.name != "All crime" && numberOfCrimesByCategory.push(getNumberOfCrimesForCategory(category, crimeData))
  );

  return numberOfCrimesByCategory.filter((crime) => crime.amount > 0).sort(({ amount: a }, { amount: b }) => b - a);
}

export function getNumberOfCrimesForCategory(category: CrimeCategories, crimeData: CrimeDataResponse[]) {
  const arrayItem = {
    category: category.name,
    amount: crimeData.filter((crime) => crime.category === category.url).length,
  };
  return arrayItem;
}
