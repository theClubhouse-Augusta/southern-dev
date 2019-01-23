window.onload = function () {

  /*!
   * Serialize all form data into a query string
   * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
   * @param  {Node}   form The form to serialize
   * @return {String}      The serialized form data
   */

  const serialize = function (form) {

    // Setup our serialized data
    var serialized = {};

    // Loop through each field in the form
    for (var i = 0; i < form.elements.length; i++) {

      var field = form.elements[i];

      // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
      if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;

      // If a multi-select, get all selections
      if (field.type === 'select-multiple') {
        for (var n = 0; n < field.options.length; n++) {
          if (!field.options[n].selected) continue;
          serialized[encodeURIComponent(field.name)] = encodeURIComponent(field.options[n].value);
        }
      }

      // Convert field data to a query string
      else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
        serialized[encodeURIComponent(field.name)] = encodeURIComponent(field.value);
      }
    }
    return serialized;
  };

  /* Subscribe Form submittal */
/*  var form = document.forms.namedItem('emailAdd');
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var formData = serialize(form);
    fetch("https://gothic-welder-217319.appspot.com", {
        method: "POST",
        headers: {
          "content-type": "text/plain"
        },
        body: JSON.stringify(formData)
      })
      .then(function (resp) {
        return resp.text();
      })
      .then(function (data) {
        console.log(data);
        results.textContent = data;
      })
      .catch(function (error) {
        console.error(error);
      })
  });
*/


  /*
  1. Button that enables instagram filters
  2. It is hidden at the top left corner of the splash page
  */
  var instaFilters = document.querySelector(".insta-filters"),
   splashImg = document.getElementById("splash-img"),
   devBtn = document.getElementById("dev-btn");


  function GenerateFilters (){
    var filterArray = ["sepia", "default"];

    // 1. Create insta filters
    filterArray.forEach(function(element) {
      var filterButton = document.createElement("button");
      filterButton.id = element;
      filterButton.innerHTML = element;
      instaFilters.appendChild(filterButton);
    });

    // 2. Add Event Listener to filters
    instaFilters.addEventListener("click", function (event) {
      var instaFilter = event.target;
      switch (instaFilter.id) {
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

  devBtn.addEventListener("click", GenerateFilters);


  /* Logo Shadow Hover animation */
  var logo = document.querySelector(".logo");

  logo.addEventListener("mousemove", function(e) {
    var xPosition = e.clientX;
        xPosition = Math.round(- xPosition / 50);
    var yPosition = e.clientY;
        yPosition = Math.round(yPosition / 50);

    var dropShadow = "drop-shadow(" + xPosition  + "px " + yPosition  + "px 5px rgba(0, 0, 0, 0.5))";
    // console.log(xPosition, yPosition);
    logo.style.filter = dropShadow;
  });


/* SPEAKER SECTION */
  // function speakerTemplateBuilder(speakers) {
  //   var bios = document.getElementById("bios")
  //   speakers.forEach(function(speaker) {
  //     var speakerName = speaker.name;
  //     speakerName = speakerName
  //     console.log(speaker.name);
  //   })
  // }

  function SpeakerTemplate (speaker) {
    var name = speaker.name,
      bioShort = speaker["bio-short"],
      image = speaker.image;

    SpeakerHTMLCompile(name, bioShort, image)
  }

  function SpeakerHTMLCompile(name, bioShort, image) {
    // document.createElement
  }
  
  // speakerTemplateBuilder(speakers);

  speakers.forEach(function(speaker) {
    SpeakerTemplate(speaker)
  });

}