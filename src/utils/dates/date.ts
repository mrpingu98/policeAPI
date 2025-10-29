export function getCurrentMonthAndYear() {
  const today = new Date();
  const currentMonth = today.getMonth() + 1;
  const currentYear = today.getFullYear();

  return `${currentYear}-${currentMonth.toString().padStart(2, "0")}`;
}
