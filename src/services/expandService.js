/*==================== SHOW MENU ====================*/
export const showMenu = (navId) => {
  let nav = document.getElementById(navId);
  nav.classList.toggle("show-menu");
};

/*==================== REMOVE MENU MOBILE ====================*/

export function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
