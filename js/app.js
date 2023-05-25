/*fetch("https://fakestoreapi.com/products")
  .then((data) => {
    //console.log(data);
    return data.json();
  })
  .then((fufilled) => {
    console.log(fufilled);
  });*/

/*======================Alternative========================*/
/*===============DOM-SELECTION======================*/
const containerCards = document.querySelector(".cards-container");
fetch("https://fakestoreapi.com/products")
  .then(function (data) {
    //console.log(data);
    //convert to Data to JSON OBJECT
    return data.json();
  })
  //This simply means if the promise is fullfilled
  .then(function (fufilled) {
    //console.log(fufilled[2].title);
    //to display our data
    const html = `
          <div class="card">
            <h2 class="title">${fufilled.title}</h2>
            <img
              src="${fufilled.image}"
              alt="img"
            />
            <p>${fufilled.description}</p>
            <p class="category">${fufilled.category}</p>
            <p class="price">${fufilled.price}</p>
          </div>
    `;
    containerCards.insertAdjacentHTML("beforeend", html);
    containerCards.style.opacity = 1;
  });
