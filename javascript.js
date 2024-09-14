// gsap.from("header img", {
//   y: -60,
//   duration: 0.4,
//   delay: 1,
// });
// gsap.from("li", {
//   y: -60,
//   duration: 0.1,
//   delay: 1.1,
//   stagger: 1,
// });
// gsap.from("#myaccount", {
//   y: -70,
//   duration: 1,
//   delay: 1.2,
//   stagger: 1,
// });

var tl = gsap.timeline();
tl.from(".section1 p", {
  x: -670,
  duration: 1,
  delay: 1.2,
});

tl.from(".section1 span", {
  x: -670,
  duration: 1,
});
tl.from(".section1 a", {
  x: -670,
  duration: 1.5,
});
gsap.from(".section1 img", {
  x: 870,
  duration: 1.5,
  delay: 1.2,
  stagger: 1,
});

// ...........................section2........

gsap.from(".section2a div", {
  x: -870,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".section2a",
    scroller: "body",
    // markers: true,
    start: "top 50%",
    end: "top 30%",
    scrub: 2,
  },
});
gsap.from(".section2a img", {
  x: 870,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".section2a",
    scroller: "body",
    // markers: true,
    start: "top 50%",
    end: "top 30%",
    scrub: 2,
  },
});

gsap.from(".divpara", {
  duration: 1.5,
  scale: 0,
  scrollTrigger: {
    trigger: ".divpara",
    scroller: "body",
    // markers: true,
    start: "top 50%",
    end: "top 30%",
    scrub: 2,
  },
});

gsap.from(".section4 div", {
  x: -870,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".section4",
    scroller: "body",
    // markers: true,
    start: "top 50%",
    end: "top 30%",
    scrub: 2,
  },
});
gsap.from(".section4 img", {
  x: 870,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".section4",
    scroller: "body",
    // markers: true,
    start: "top 50%",
    end: "top 30%",
    scrub: 2,
  },
});

gsap.from("#section5 img", {
  scale: 0,
  duration: 1.5,
  scrollTrigger: {
    scale: 100,

    trigger: "#section5",
    scroller: "body",
    // markers: true,
    start: "top 50%",
    end: "top 30%",
    scrub: 2,
  },
});
gsap.from("#section5 div", {
  scale: 0,
  duration: 1.5,
  scrollTrigger: {
    scale: 100,

    trigger: "#section5",
    scroller: "body",
    // markers: true,
    start: "top 50%",
    end: "top 30%",
    scrub: 2,
  },
});


