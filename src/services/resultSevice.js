export const results = [
  { id: "1", icon: "B", title: "Build Failed", content: "Ex. syntax error" },
  { id: "2", icon: "C", title: "Created Failed", content: "Contact Admin" },
  { id: "3", icon: "F", title: "Function is Banned", content: "" },
  { id: "4", icon: "L", title: "Library is Banned", content: "" },
  { id: "5", icon: "O", title: "Out of Buffer", content: "Output too large" },
  { id: "6", icon: "P", title: "Pass", content: "Pass testcase." },
  { id: "7", icon: "T", title: "Time out", content: "Max time out is 1s" },
  { id: "8", icon: "W", title: "Testcase Error", content: "Contact Admin" },
  {
    id: "9",
    icon: "X",
    title: "Runtime Error",
    content: "Error occur while running",
  },
  { id: "10", icon: "Y", title: "Grader Error", content: "Contact Admin" },
  { id: "11", icon: "-", title: "Not Pass", content: "Not pass testcase" },
];

export function getResults() {
  return results.filter((i) => i);
}
