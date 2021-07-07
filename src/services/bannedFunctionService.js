export const bannedFunction = [
  { id: "1", name: "atexit" },
  { id: "2", name: "fclose" },
  { id: "3", name: "fdopen" },
  { id: "4", name: "fmax" },
  { id: "5", name: "fmin" },
  { id: "6", name: "fopen" },
  { id: "7", name: "fprintf" },
  { id: "8", name: "fread" },
  { id: "9", name: "fwrite" },
  { id: "10", name: "gets" },
  { id: "11", name: "kill" },
  { id: "12", name: "max" },
  { id: "13", name: "min" },
  { id: "14", name: "next_permutation" },
  { id: "15", name: "partial_sort" },
  { id: "16", name: "qsort" },
  { id: "17", name: "reverse" },
  { id: "18", name: "reverse_copy" },
  { id: "19", name: "search" },
  { id: "20", name: "search_n" },
  { id: "21", name: "sort" },
  { id: "22", name: "stable_sort" },
  { id: "23", name: "swap" },
  { id: "24", name: "system" },
];

export function getBannedFunction() {
  return bannedFunction.filter((i) => i);
}
