// A function that adds and remove the class "active" on the section you click on.
function faqClickHandler(e) {
  console.log(e);

  const element = e.currentTarget;
  element.classList.toggle("myActiveFaq");
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
const section1Element = document.getElementById("section1");
section1Element.addEventListener("click", faqClickHandler);

const accordion = document.querySelector(".accordion");

async function getFaqData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  console.log(data);

  data.forEach((post) => {
    const title = post.title;
    const body = post.body;

    const titleDiv = document.createElement("div");
    titleDiv.className = "title2";

    titleDiv.addEventListener("click", faqClickHandler);

    const descriptionDiv = document.createElement("div");
    descriptionDiv.className = "description";

    titleDiv.innerHTML = `<i class="fa-solid fa-chevron-up"></i>
    <p>${title}</p>`;

    descriptionDiv.textContent = body;

    accordion.appendChild(titleDiv);
    accordion.appendChild(descriptionDiv);
  });
}
getFaqData();