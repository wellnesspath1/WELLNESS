// Wait for page to load
document.addEventListener("DOMContentLoaded", () => {
  console.log("Website Loaded ✅");

  // Contact Form Alert
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (event) => {
      alert("Thank you! Your message has been prepared for sending.");
    });
  }

  // Back to Top Button
  const backToTop = document.createElement("button");
  backToTop.textContent = "↑ Top";
  backToTop.id = "backToTop";
  document.body.appendChild(backToTop);

  // Style the button (could also be in CSS)
  backToTop.style.position = "fixed";
  backToTop.style.bottom = "20px";
  backToTop.style.right = "20px";
  backToTop.style.display = "none";
  backToTop.style.padding = "10px 15px";
  backToTop.style.background = "#4CAF50";
  backToTop.style.color = "white";
  backToTop.style.border = "none";
  backToTop.style.borderRadius = "5px";
  backToTop.style.cursor = "pointer";

  // Show button when scrolling
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  // Scroll to top when clicked
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
