particlesJS("particles-js", {
  particles: {
    number: { value: 50, density: { enable: true, value_area: 800 } },
    color: { value: "#4CAF50" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: false },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#4CAF50",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 4,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      repulse: { distance: 70, duration: 0.4 },
      push: { particles_nb: 4 },
    },
  },
  retina_detect: true,
});

document.querySelectorAll(".contact-link").forEach((link) => {
  link.addEventListener("touchstart", () => {
    link.style.transform = "scale(1.1)";
  });
  link.addEventListener("touchend", () => {
    link.style.transform = "scale(1)";
  });
});
