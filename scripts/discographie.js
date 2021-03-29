const swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    effect: 'flip',
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });

  gsap.registerPlugin(ScrollTrigger);

  let zones = document.querySelectorAll(".section");

  zones.forEach(section => {
    let title = section.querySelectorAll("#title");
    let list = section.querySelectorAll(".list");
    let image = section.querySelectorAll(".image");
    let btn = section.querySelectorAll(".btn");

    gsap.timeline({
      scrollTrigger: {
        start: "top 60%",
        trigger: section,
        toggleActions: "play none none reverse",
      }
    })

    .from(title, 
      {x: -50, opacity: 0})
    .from(list,
      {x: -50, opacity: 0}, '-= 0.5')
    .from(image,
      {y: 50, opacity: 0}, '-= 0.5')
    .from(btn,
      {y: 50, opacity: 0}, '-= 0.5')
  });