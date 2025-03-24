const $owlCarousel = $(".owl-carousel").owlCarousel({
  items: 1,
  loop: true,
  nav: true,
  navText: [
    '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>',
    '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>',
  ],
  autoplay: true, // Enable auto-play
  autoplayTimeout: 7000, // Set auto-play interval to 10 seconds
  autoplayHoverPause: true, // Pause auto-play on hover
  smartSpeed: 500, // Set the speed of the slide transi
  dots: false, // Hide the dots
});

$owlCarousel.on("initialized.owl.carousel", () => {
  setTimeout(() => {
    $(".owl-item.active .owl-slide-animated").addClass("is-transitioned");
    $("section").show(); // Ensure sections are visible
  }, 200);
});

$owlCarousel.on("changed.owl.carousel", (e) => {
  $(".owl-slide-animated").removeClass("is-transitioned"); // Remove transition class from all slides

  const $currentOwlItem = $(".owl-item").eq(e.item.index); // Get current slide
  $currentOwlItem.find(".owl-slide-animated").addClass("is-transitioned"); // Add transition class to current slide

  const $target = $currentOwlItem.find(".owl-slide-text"); // Get text in the current slide
  doDotsCalculations($target); // Update dot positions
});

$owlCarousel.on("resize.owl.carousel", () => {
  setTimeout(() => {
    setOwlDotsPosition(); // Update dot positions on resize
  }, 50);
});

// Optional: Adjust the height of the slides to 100vh on window resize
$(window).on("resize", () => {
  $(".owl-carousel .owl-slide").css("height", $(window).height()); // Set height of slides
});

function setOwlDotsPosition() {
  const $target = $(".owl-item.active .owl-slide-text"); // Get text in the active slide
  doDotsCalculations($target); // Perform dot position calculations
}

function doDotsCalculations(el) {
  const height = el.height(); // Get height of text
  const { top, left } = el.position(); // Get position of text
  const res = height + top + 20; // Calculate dot position

  $(".owl-carousel .owl-dots").css({
    top: `${res}px`, // Set top position of dots
    left: `${left}px`, // Set left position of dots
  });
}
