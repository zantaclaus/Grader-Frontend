/* ========== Add Toggle ========== */
export const addToggle = (elementId, className) => {
  let element = document.getElementById(elementId);
  element.classList.toggle(className);
};

/* ========== Add Toggle ========== */
export const delClass = (elementId, className) => {
  let element = document.getElementById(elementId);
  element.classList.remove(className);
};
