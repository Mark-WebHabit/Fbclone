export type Month = {
  short: string;
  full: string;
  endDate: number;
};

export const months: Month[] = [
  { short: "Jan", full: "January", endDate: 31 },
  { short: "Feb", full: "February", endDate: 28 },
  { short: "Mar", full: "March", endDate: 31 },
  { short: "Apr", full: "April", endDate: 30 },
  { short: "May", full: "May", endDate: 31 },
  { short: "Jun", full: "June", endDate: 30 },
  { short: "Jul", full: "July", endDate: 31 },
  { short: "Aug", full: "August", endDate: 31 },
  { short: "Sep", full: "September", endDate: 30 },
  { short: "Oct", full: "October", endDate: 31 },
  { short: "Nov", full: "November", endDate: 30 },
  { short: "Dec", full: "December", endDate: 31 },
];
