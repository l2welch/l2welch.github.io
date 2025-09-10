// Button click effect
document.getElementById("magicButton").addEventListener("click", () => {
  alert("✨ Thanks for visiting my portfolio!");
});

// TheaterJS typing effect
const theater = theaterJS();

// Add an "actor" (the element where text will appear)
theater.addActor('typing', { accuracy: 0.8, speed: 1.0 });

// Write some sequences
theater
  .addScene('typing: Engineering Student')
  .addScene(theater.delay(1000))
  .addScene('typing: Developer')
  .addScene(theater.delay(1000))
  .addScene('typing: Designer')
  .addScene(theater.delay(1000))
  .addScene(() => theater.play()); // loop forever