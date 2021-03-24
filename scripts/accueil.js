const swiper = new Swiper('.swiper-container', {
    speed: 1000,
    spacebetween:500,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  gsap.registerPlugin(ScrollTrigger); 

  let sections = document.querySelectorAll(".section");

  sections.forEach(section => {
    let title = section.querySelectorAll("#title");
    let card = section.querySelectorAll(".card");
    let carroussel = section.querySelectorAll(".swiper-container");
    let video = section.querySelectorAll("iframe");

    gsap.timeline({
      scrollTrigger: {
        start: "top 60%",
        trigger: section,
        toggleActions: "play none none reverse",
      }
    })

    .from(title, 
      {x: -25, opacity: 0})
    .from(card,
      {y: 25, opacity: 0}, '-= 0.1')
    .from(carroussel,
      {y: 25, opacity: 0}, '-= 0.3')
    .from(video,
      {y: 25, opacity: 0}, '-= 0.3')
  });
