/*==================== SHOW MENU ====================*/
export const showMenu = (navId) => {
  let nav = document.getElementById(navId);
  nav.classList.toggle("show__menu");
};

/*==================== REMOVE MENU MOBILE ====================*/

export function linkAction() {
  const navMenu = document.getElementById("navbar");
  navMenu.classList.remove("show__menu");
}
