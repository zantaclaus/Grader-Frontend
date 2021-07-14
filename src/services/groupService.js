export const groups = [
  { id: 0, name: "Blacktip reef Shark" },
  { id: 1, name: "Moko Shark" },
  { id: 2, name: "Hammerhead Shark" },
  { id: 3, name: "Whale Shark" },
  { id: 4, name: "Lemon Shark" },
  { id: 5, name: "Admin Shark" },
  { id: 6, name: "Super Admin Shark" },
];

export function getGroup(id) {
  return groups.filter((i) => id === i.id);
}
