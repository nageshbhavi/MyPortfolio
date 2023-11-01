const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
    // else{
    //     entry.target.classList.remove('show');
    // }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

let btnSubmit = document.querySelector("button");
let inputs = document.querySelectorAll("input");

btnSubmit.addEventListener("submit", () => {
  inputs.forEach((input) => (input.value = ""));
});

