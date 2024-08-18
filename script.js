function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// reloading but the path stays same
// window.addEventListener('load', function() {
//   // Scroll to the top of the page
//   window.scrollTo(0,0).scrollIntoView({behaviour: 'smooth'});
//   document.getElementById("hero-profile").scrollIntoView({behaviour: 'smooth'});
// });

window.addEventListener('load', () => {
  // Remove the hash from the URL
  if (window.location.hash) {
      history.replaceState(null, null, window.location.pathname);
  }
  // Scroll to the top of the page with smooth scrolling
  window.scrollTo({ top: 0, behavior: 'smooth' });
});