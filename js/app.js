/*===============DOM-SELECTION======================*/
const containerCards = document.querySelector(".cards-container");
fetch("https://fakestoreapi.com/products")
  .then(function (data) {
    //console.log(data);
    //convert to Data to JSON OBJECT
    return data.json();
  })
  //This simply means if the promise is fullfilled
  //console.log(fufilled[2].title);
  //to display our data we use forEach to loop
  .then(function (fufilled) {
    fufilled.forEach(function (fufil) {
      const html = `
          <div class="card">
            <h2 class="title">${fufil.title}</h2>
            <img
              src="${fufil.image}"
              alt="img"
            />
            <p>${fufil.description}</p>
            <p class="category">${fufil.category}</p>
            <p class="price">${fufil.price}</p>
          </div>
    `;
      containerCards.insertAdjacentHTML("beforeend", html);
      containerCards.style.opacity = 1;
    });
  });
