document.addEventListener("DOMContentLoaded", () => {
   const questions = document.querySelectorAll(".question");

   questions.forEach((question) => {
      question.addEventListener("click", function () {
      const answer = this.nextElementSibling; // Selects the <p> after the clicked div
      const icon = this.querySelector("img"); // Selects the plus icon

      // Toggle active class
      answer.classList.toggle("active");

      // Calculate the actual height of the answer content
      if (answer.classList.contains("active")) {
         answer.style.height = `${answer.scrollHeight}px`; // Set height to content height
         icon.src = "./assets/images/icon-minus.svg";
      } else {
         answer.style.height = "0"; // Collapse the answer
         icon.src = "./assets/images/icon-plus.svg";
      }

      // Close other open answers
      document.querySelectorAll(".answer").forEach((other) => {
         if (other !== answer) {
            other.classList.remove("active");
            other.style.height = "0"; // Collapse other answers
            other.previousElementSibling.querySelector("img").src ="./assets/images/icon-plus.svg";
            }
         });
      });
   });
});
