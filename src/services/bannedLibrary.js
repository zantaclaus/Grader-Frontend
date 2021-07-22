export const bannedLibrary = [
  { id: "2", name: "algorithm" },
  { id: "17", name: "atomic" },
  { id: "8", name: "bitset" },
  { id: "1", name: "bits/stdc++.h" },
  { id: "10", name: "deque" },
  { id: "11", name: "forward_list" },
  { id: "16", name: "fstream" },
  { id: "7", name: "list" },
  { id: "3", name: "map" },
  { id: "18", name: "mutex" },
  { id: "99", name: "numeric" },
  { id: "4", name: "queue" },
  { id: "6", name: "set" },
  { id: "20", name: "signal.h" },
  { id: "5", name: "stack" },
  { id: "14", name: "stdatomic" },
  { id: "22", name: "stdlib.h" },
  { id: "15", name: "thread" },
  { id: "19", name: "unistd.h" },
  { id: "12", name: "unordered_map" },
  { id: "13", name: "unordered_set" },
  { id: "9", name: "utility" },
  { id: "21", name: "windows.h" },
];

export function getBannedLibrary() {
  return bannedLibrary.filter((i) => i);
}
