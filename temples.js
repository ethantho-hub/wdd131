document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menuButton");
  const navMenu = document.getElementById("navMenu");
  const gallery = document.getElementById("templeGallery");
  const title = document.getElementById("categoryTitle");

  // Toggle mobile menu
  menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  // Temple data
  const temples = {
    home: [
      { name: "San Diego California", img: "https://www.thechurchnews.com/resizer/VxBEVJ1ErzRH4azSgYYtPQBkghQ=/arc-photo-deseretnews/arc2-prod/public/3VKJHM6BSKUTACFDKIZY2OGNYY.jpg" },
      { name: "Salt Lake City Utah", img: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg" },
      { name: "Taylorsville Utah", img: "https://www.churchofjesuschrist.org/imgs/08db56099dce11eeaccceeeeac1eec0900fabbe8/full/800%2C/0/default" }
    ],
    old: [
      { name: "Nauvoo Illinois", img: "https://history.churchofjesuschrist.org/bc/content/images/media/nauvoo-processed-1848-1850/780x780/varin-temple-mormon-de-nau.jpg" },
      { name: "Salt Lake City Utah", img: "https://www.thechurchnews.com/resizer/v2/5MIMYNR6T66HLZYPJVYYQQCYWY.jpg?auth=f4c731d9908dd64bd28793ee3afe3e42ca8aa98c5f5735c17d939d2e10ba7a83&focal=0%2C0&width=800&height=600" },
      { name: "St. George Utah", img: "https://cloudfront-us-east-1.images.arcpublishing.com/deseretnews/HLNF32ZU77NEBZ6WZZICOFUTLE.jpg" }
    ],
    new: [
      { name: "Rome Italy", img: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-3548-main.jpg" },
      { name: "Payson Utah", img: "https://newsroom.churchofjesuschrist.org/media/960x540/Payson-utah-temple-rendering.jpg" },
      { name: "Tucson Arizona", img: "https://churchofjesuschristtemples.org/assets/img/temples/snowflake-arizona-temple/snowflake-arizona-temple-46560-thumb.jpg" }
    ],
    large: [
      { name: "Salt Lake City Utah", img: "https://media.cnn.com/api/v1/images/stellar/prod/190419150647-salt-lake-city-temple.jpg?q=x_145,y_70,h_1536,w_2731,c_crop/h_833,w_1480" },
      { name: "Washington D.C.", img: "https://media.cnn.com/api/v1/images/stellar/prod/190419150647-salt-lake-city-temple.jpg?q=x_145,y_70,h_1536,w_2731,c_crop/h_833,w_1480" },
      { name: "Mexico City Mexico", img: "https://www.churchofjesuschrist.org/imgs/59a867c4052795ee6ac95c839229b3ec41b0c656/full/1920%2C/0/default" }
    ],
    small: [
      { name: "Anchorage Alaska", img: "https://churchofjesuschristtemples.org/assets/img/temples/anchorage-alaska-temple/anchorage-alaska-temple-13886-main.jpg" },
      { name: "Copenhagen Denmark", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH1H-PD76gxbrul9EyQFcHTj4rJeym1seZAw&s" },
      { name: "Lisbon Portugal", img: "https://www.churchofjesuschrist.org/imgs/6d84eb0301da0baca818212965160d2db12879c1/full/800%2C/0/default" }
    ]
  };

  // Load temples dynamically
  function displayTemples(category) {
    gallery.innerHTML = "";
    temples[category].forEach(t => {
      const figure = document.createElement("figure");
      figure.innerHTML = `
        <img src="${t.img}" alt="${t.name}">
        <figcaption>${t.name}</figcaption>
      `;
      gallery.appendChild(figure);
    });
    title.textContent = category.charAt(0).toUpperCase() + category.slice(1);
  }

  // Event listeners
  document.querySelectorAll(".navBtn").forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.getAttribute("data-category");
      displayTemples(category);
      navMenu.classList.remove("show");
    });
  });

  // Load default view
  displayTemples("home");
});
