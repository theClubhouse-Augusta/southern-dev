"use strict";

var speakers = [{
  "name": "Jerome Hardaway",
  "company": "Vets Who Code",
  "title": "Geek @ Arms of Vets Who Code",
  "bio-short": "Front End Developer && Geek @ Arms of Vets Who Code. After serving the Air Force as a member of Security Forces, he transitioned into code during the Great Recession with his first job working on Databases with the Dept of Homeland Security.",
  "bio-long": "Jerome Hardaway is a Front End Developer && Geek @ Arms of Vets Who Code. After serving the Air Force as a member of Security Forces, he transitioned into code during the Great Recession with his first job working on Databases with the Dept of Homeland Security.\n    While building and leading engineers at Vets Who Code, his main duties is building relationships, telling the stories of our veterans, talks, learning and passing higher level training to the incoming leadership team as they support and grow the next groups of entry-level && junior developers.",
  "image": "jerome.jpg",
  "social-media": {
    "twitter": "https://twitter.com/JeromeHardaway"
  }

}, {
  "name": "Eric Harrison",
  "company": "Moonrise",
  "title": "Co-founder and CTO of Moonrise",
  "bio-short": "co-founder and CTO of Moonrise, a social-impact startup trying to use AI to connect financially challenged workers to awesome jobs. He's the author of An Introduction to Robot Programming and has spent his career trying to automate-away the worst parts of life.",
  "image": "eric.png",
  "social-media": {
    "twitter": "https://twitter.com/blister"
  }
}, {
  "name": "Harsha Vemulapalli",
  "company": "Robert Bosch LLC",
  "title": "Head of Design for Bosch",
  "bio-short": "Head of Design for Robert Bosch’s North American region. In this capacity, he leads UX efforts focused on building on Bosch’s history of excellence as a leading global supplier of technology and services by driving adoption of innovative, design-thinking solutions and services. His teams span the gamut from Industrial Design, Service Design, Interaction Design, Visual Design and User Research.",
  "bio-long": "Harsha Vemulapalli is the Head of Design for Robert Bosch’s North American region. In this capacity, he leads UX efforts focused on building on Bosch’s history of excellence as a leading global supplier of technology and services by driving adoption of innovative, design-thinking solutions and services. His teams span the gamut from Industrial Design, Service Design, Interaction Design, Visual Design and User Research.\nPrior to joining Bosch, Harsha served in UX leadership roles with the United States Air Force and the Centers for Disease Control and Prevention, and worked on design and product teams at Blackbaud, Morris DigitalWorks, Mirant and Softsys (hey it was the Tech Bubble days and all the good names were taken).\nLike the Ultimate Warrior, Harsha hails from parts unknown. He would also prefer to be introduced as “weight unknown” and \“height unknown.\”",
  "image": "Harsha.jpg"
}, {
  "name": "Mark Noonan",
  "company": "Content Thread",
  "title": "Web Developer at Content Thread",
  "bio-short": "Web developer at Content Thread (a digital agency and consulting firm specializing in AEM) and a member of Code for Atlanta's leadership team. He also serves as a program developer for People Making Progress, an Atlanta-based nonprofit serving adults with developmental disabilities at home, work, and in the community. In 2017 he led the Paratransit Pal project, which won AT&T's Civic Coding Challenge, after which the project team donated the entire $40,000 prize to charity.",
  "image": "mark.jpg",
  "social-media": {
    "twitter": "https://twitter.com/marktnoonan"
  }
}, {
  "name": "Mark Locklear",
  "company": "Vets Who Code",
  "title": "Web Developer, Founder, Mentor Director, Instructor",
  "bio-short": "Mark Locklear is a web developer at the eXtension Initiative, founder of Remotegig.io and Director of mentors at Vets Who Code. He is an Adjunct Instructor at Asheville Buncombe Technical Community College and is passionate about education and teaching students software development.",
  "image": "markL.jpg",
  "social-media": {
    "twitter": "https://twitter.com/marklocklear"
  }
}, {
  "name": "Patrick Rodgers",
  "company": "PowerServe",
  "title": "Project Manager and Lead Programmer",
  "bio-short": "Patrick is a Lead Programmer and Project Manager at Powerserve in Augusta, Georgia. He began his career at Powerserve 13 years ago as a web designer, but in that time discovered his love for programming and made a career swap. He now leads a team of programmers who work on a site that sells over $100 million dollars worth of product annually. He has a passion for solving problems using the best means and 80's punk music.",
  "image": "patrickr.png",
  "social-media": {
    "twitter": "https://twitter.com/1hitsong"
  }
}];

var sponsors = [{
  "name": "DREAM",
  "link": "http://www.dream-enterprise.com/_wp/",
  "level": "silver"
}, {
  "name": "TelWare",
  "link": "https://www.telware.com/",
  "level": "silver"
}, {
  "name": "powerserve",
  "link": "https://www.powerserve.net/",
  "level": "silver"
}, {
  "name": "emineo",
  "link": "https://www.emineomarketing.com/",
  "level": "silver"
}, {
  "name": "runcode",
  "link": "https://runcode.ninja/",
  "level": "silver"
}, {
  "name": "freemouth",
  "link": "https://freemouthmedia.com/",
  "level": "silver"
}];
"use strict";

window.onload = function () {

  var logo = document.querySelector(".logo"),
      hamburger = document.querySelector('.hamburger');

  // if(document.querySelector(".speakers")) {
  //   speakers.forEach(function(speaker) {
  //     SpeakerTemplate(speaker)
  //   });
  // }


  /*   if(document.querySelector(".sponsors")) {
      const sponsorSection = document.querySelector(".sponsors");
      const levels = [
        // "platinum",
        // "gold",
        "silver",
        // "community"
        ];
  
      sponsorSection.appendChild(createLevels(levels));
      sponsors.forEach(function(sponsor) {
  
        // sponsorSection.appendChild(sponsorTemplate(sponsor));
        sponsorTemplate(sponsor, levels);
      });
    }
   */
  hamburger.addEventListener("click", function () {
    var main = document.getElementById("header-main");
    main.classList.toggle("active-nav");
    hamburger.classList.toggle("active-nav");
  });

  if (logo) {
    logo.addEventListener("mousemove", function (e) {
      var xPosition = e.clientX;
      xPosition = Math.round(-xPosition / 50);
      var yPosition = e.clientY;
      yPosition = Math.round(yPosition / 50);

      var dropShadow = "drop-shadow(" + xPosition + "px " + yPosition + "px 5px rgba(0, 0, 0, 0.5))";
      // console.log(xPosition, yPosition);
      logo.style.filter = dropShadow;
    });
  }
};

function GenerateFilters() {
  var instaFilters = document.querySelector(".insta-filters"),
      splashImg = document.getElementById("splash-img");
  /*
    1. Button that enables instagram filters
    2. It is hidden at the top left corner of the splash page
  */
  var filterArray = ["sepia", "simarillion", "luna", "default"];

  // 1. Create insta filters
  filterArray.forEach(function (element) {
    var filterButton = document.createElement("button");
    filterButton.id = element;
    filterButton.innerHTML = element;
    instaFilters.appendChild(filterButton);

    // Reset Dev Button's style
    // devBtn.style.display = "none";
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

/* SPEAKER SECTION TEMPLATE */
/* function SpeakerTemplate(speaker) {
  // 1. Parse Speakers Object
  const name = speaker.name,
    bioShort = speaker["bio-short"],
    image = speaker.image,
    company = speaker.company;

  // 2. Create Elements
  const nameTemplate = document.createElement("h4"),
    bioShortTemplate = document.createElement("p"),
    imgTemplate = document.createElement("img"),
    companyTemplate = document.createElement("h5"),
    txtContainer = document.createElement("div"),
    bio = document.createElement("div");

  // 3. Assign Element Properties
  nameTemplate.textContent = name;
  companyTemplate.textContent = company;
  bioShortTemplate.textContent = bioShort;
  imgTemplate.src = "images/" + image;
  bio.classList.add("bio");
  txtContainer.classList.add("txt-container");

  // 4. Assign HTML Context
  if ("social-media" in speaker){
    txtContainer.appendChild(SocialMediaTemplate(speaker));
  }

  txtContainer.appendChild(nameTemplate);
  txtContainer.appendChild(companyTemplate);
  txtContainer.appendChild(bioShortTemplate);
  bio.appendChild(imgTemplate);
  bio.appendChild(txtContainer);


  // 5. Attach to Document
  const bios = document.getElementById("bios");
  bios.appendChild(bio);
}

function SocialMediaTemplate(speaker){

  let div = document.createElement("div");
  div.classList.add("social-media");

  Object.keys(speaker["social-media"]).forEach(function(socialMedia) {
    let socialMediaLink = document.createElement("a"),
    socialMediaIcon = document.createElement("i");

    socialMediaLink.setAttribute("href", speaker["social-media"][socialMedia]);
    socialMediaIcon.classList.add("fab", "fa-" + socialMedia);

    socialMediaLink.appendChild(socialMediaIcon);
    div.appendChild(socialMediaLink);
  });

  return div;
} */

/*
function createLevels(levels) {
  let template = document.createElement("div");
  template.classList.add("sponsors-section");

  levels.forEach(function(level) {
    let levelTemplate = document.createElement('div'),
      title = document.createElement('h3'),
      header = document.createElement('header');

    title.textContent = level.toUpperCase();
    levelTemplate.classList.add("sponsor-section", level);

    header.appendChild(title);
    levelTemplate.appendChild(header);
    template.appendChild(levelTemplate);
  });
  return template;
}


function sponsorGenerate(sponsor) {
  let template = document.createElement('a'),
  imageChild = document.createElement('img');

  let imgSrc = 'images/sponsor-' + sponsor.name + ".png";



  template.setAttribute('href', sponsor.link);
  imageChild.src = imgSrc;

  console.log(template);
  template.appendChild(imageChild);

  return template;
}


function sponsorTemplate(sponsor, levels) {

  let parent = document.querySelector("." + sponsor.level);
  if(!parent) {
    console.errror("Sponsor: " + sponsor + "/n Does not have a valid level");
  }
  parent.appendChild(sponsorGenerate(sponsor));

  console.log(parent);
  return parent;
} */
//# sourceMappingURL=main.js.map
