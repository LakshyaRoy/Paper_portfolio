const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
let tl = gsap.timeline();

tl.to("#page1", {
  y: "100vh",
  scale: 0.6,
  duration: 0,
});

tl.to("#page1", {
  y: "30vh",
  duration: 1,
  delay: 0.5,
});

tl.to("#page1", {
  rotate: -360,
  scale: 1,
  duration: 0.8,
  delay: 0.2,
  y: "0vh",
});
