/*
    .to()
    .from()
    .fromTo()

*/
let animation = gsap.timeline()

animation
  .to('.fred1', {
    x: 400,
    duration: 3,
    rotation: 360,
    repeat: -1,
    yoyo: true,
    ease: 'power3',
  })
  .to('.fred2', {
    x: 400,
    duration: 3,
    rotation: 360,
    repeat: -1,
    yoyo: true,
    ease: 'bounce',
  })
