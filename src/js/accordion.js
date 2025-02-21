document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelectorAll(".accordion-btn");

  button.forEach((btn) => {
    btn.addEventListener("click", () => {
          const faqItem = btn.closest('.faq-item');
      faqItem.classList.toggle("active");
    })
  })
})