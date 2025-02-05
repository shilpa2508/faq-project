"use strict";

// src/faq.js
document.querySelectorAll('.faq-question').forEach(function (button) {
  button.addEventListener('click', function () {
    var faqItem = button.parentElement;
    faqItem.classList.toggle('active');
  });
});
//# sourceMappingURL=faq.dev.js.map
