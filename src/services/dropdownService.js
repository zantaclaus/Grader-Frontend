/*==================== SHOW Dropdown ====================*/
export const showDropdown = (dropdownId) => {
  let dropdown = document.getElementById(dropdownId);
  dropdown.classList.toggle("show-dropdown");
};

/*==================== Remove Dropdown ====================*/
export function linkAction() {
  const dropdown = document.getElementById("dropdown");
  dropdown.classList.remove("show-dropdown");
}
