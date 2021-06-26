export const units = [
  { id: "1", name: "Basic I/O" },
  { id: "2", name: "Condition" },
  { id: "3", name: "Loop" },
  { id: "4", name: "Array" },
  { id: "5", name: "Pattern" },
  { id: "6", name: "God Mode" },
];

export function getUnits() {
  return units.filter((i) => i);
}
