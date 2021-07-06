export const results = [
  { id: "1", icon: "P", title: "Pass", content: "Pass the testcase." },
  { id: "2", icon: "-", title: "Not Pass", content: "Not pass the testcase." },
  { id: "3", icon: "T", title: "Time out", content: "..." },
  { id: "4", icon: "O", title: "Out of Buffer", content: "..." },
  { id: "5", icon: "X", title: "Runtime Error", content: "..." },
  { id: "6", icon: "C", title: "Created Failed", content: "Contact Admin." },
  { id: "7", icon: "B", title: "Build Failed", content: "Ex. syntax error." },
  { id: "8", icon: "W", title: "Testcase Error", content: "Contact Admin." },
  { id: "9", icon: "L", title: "Library is Banned", content: "..." },
  { id: "10", icon: "F", title: "Function is Banned", content: "..." },
  { id: "11", icon: "Y", title: "Grader Error", content: "Contact Admin." },
];

export function getResults() {
  return results.filter((i) => i);
}
