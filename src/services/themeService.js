export function setTheme() {
  if (localStorage.getItem("theme") === "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

export function getTheme() {
  return localStorage.getItem("theme");
}

const exportObject = {
  setTheme,
  getTheme,
};

export default exportObject;
