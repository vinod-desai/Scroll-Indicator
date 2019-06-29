window.onload = function() {
  console.log("load complete");
};

// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed,
// without waiting for stylesheets, images, and subframes to finish loading.
window.addEventListener("DOMContentLoaded", event => {
  console.log("DOM fully loaded and parsed");
});

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  myFunction();
};

function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  console.log(
    `ScrollTop: ${document.body.scrollTop} ${
      document.documentElement.scrollTop
    } Height: ${height}`
  );
  let scrolled = (winScroll / height) * 100;
  document.getElementById("scrollInd").style.width = scrolled + "%";
}
