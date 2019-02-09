window.onload = function () {

  const instaFilters = document.querySelector(".insta-filters"),
    splashImg = document.getElementById("splash-img"),
    devBtn = document.getElementById("dev-btn"),
    logo = document.querySelector(".logo"),
    mobileNav = {
    arrow:  document.querySelector(".mobile-tray-arrow"),
    container: document.querySelector(".mobile-nav"),
    bodyWrapper: document.querySelector("#body-wrapper")
  };

  if(document.querySelector(".speakers")) {
    speakers.forEach(function(speaker) {
      SpeakerTemplate(speaker)
    });
  }

  mobileNav.arrow.addEventListener("click", function() {
    mobileNav.container.classList.toggle("active-nav");
    mobileNav.bodyWrapper.classList.toggle("active-nav");
    mobileNav.arrow.classList.toggle("active-nav");
  })

  devBtn.addEventListener("click", GenerateFilters);

  logo.addEventListener("mousemove", function(e) {
    var xPosition = e.clientX;
        xPosition = Math.round(- xPosition / 50);
    var yPosition = e.clientY;
        yPosition = Math.round(yPosition / 50);

    var dropShadow = "drop-shadow(" + xPosition  + "px " + yPosition  + "px 5px rgba(0, 0, 0, 0.5))";
    // console.log(xPosition, yPosition);
    logo.style.filter = dropShadow;
  });

}
  
function GenerateFilters (){
  /*
    1. Button that enables instagram filters
    2. It is hidden at the top left corner of the splash page
  */
  var filterArray = ["sepia", "simarillion", "luna", "default"];

  // 1. Create insta filters
  filterArray.forEach(function(element) {
    var filterButton = document.createElement("button");
    filterButton.id = element;
    filterButton.innerHTML = element;
    instaFilters.appendChild(filterButton);

  // Reset Dev Button's style
    devBtn.style.display = "none";
  });

  // 2. Add Event Listener to filters
  instaFilters.addEventListener("click", function (event) {
    var instaFilter = event.target;
    switch (instaFilter.id) {
      case "luna":
        splashImg.style.webkitfilter = "grayscale(.9) brightness(1.7)";
        splashImg.style.filter = "grayscale(.9) brightness(1.7)";
        break;
      case "simarillion":
        splashImg.style.webkitfilter = "brightness(1.4) sepia(.5) contrast(1.4) blur(1px) saturate(1)";
        splashImg.style.filter = "brightness(1.4) sepia(.5) contrast(1.4) blur(1px) saturate(1)";
        break;
      case "sepia":
        splashImg.style.webkitfilter = "sepia(1)";
        splashImg.style.filter = "sepia(1)";
        break;
      default:
        splashImg.style.webkitfilter = "";
        splashImg.style.filter = "";
        break;
    };

  });
}


/* SPEAKER SECTION */
function SpeakerTemplate(speaker) {
  // 1. Parse Speakers Object
  const name = speaker.name,
    bioShort = speaker["bio-short"],
    image = speaker.image,
    title = speaker.title;

  // 2. Create Elements
  const nameTemplate = document.createElement("h4"),
    bioShortTemplate = document.createElement("p"),
    imgTemplate = document.createElement("img"),
    titleTemplate = document.createElement("h5"),
    bio = document.createElement("div");

  // 3. Assign Element's Content
    nameTemplate.textContent = name;
    titleTemplate.textContent = title;
    bioShortTemplate.textContent = bioShort;
    imgTemplate.src = "images/" + image;
    bio.classList.add("bio");

  // 4. Assign HTML Context
    bio.appendChild(imgTemplate);
    bio.appendChild(nameTemplate);
    bio.appendChild(titleTemplate);

  // 5. Attach to Document
  const bios = document.getElementById("bios");
  bios.appendChild(bio);
}