window.onscroll = () => {
  console.log(window.scrollY);
  if (window.scrollY > 0) {
    document.querySelector("#header").classList.add("sticky");
  } else {
    document.querySelector("#header").classList.remove("sticky");
  }
};
