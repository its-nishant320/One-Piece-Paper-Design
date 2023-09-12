const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl = gsap.timeline()

tl.to("#page1",{
    y:"120vh",
    scale:0.6,
    duration:0
});

tl.to("#page1",{
    y:"30vh",
    z:"50vh",
    duration:1,
    delay:1,
    ease:"slow"
});

tl.to("#page1",{
    y:"0vh",
    rotate:720,
    scale:1,
    duration:2,
    ease:"slow"
});