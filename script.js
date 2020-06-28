// Remove Photo Gallery under 800px
const pg = document.getElementById("photo__gal");
const width = window.innerWidth;

if (width < 800) {
    pg.style.display = 'none'
}
