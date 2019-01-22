'use strict';

window.onload = function () {

  /*!
       * Serialize all form data into a query string
       * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
       * @param  {Node}   form The form to serialize
       * @return {String}      The serialized form data
       */

  var serialize = function serialize(form) {

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
      else if (field.type !== 'checkbox' && field.type !== 'radio' || field.checked) {
          serialized[encodeURIComponent(field.name)] = encodeURIComponent(field.value);
        }
    }
    return serialized;
  };

  var form = document.forms.namedItem('emailAdd');
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var formData = serialize(form);
    fetch("https://gothic-welder-217319.appspot.com", {
      method: "POST",
      headers: {
        "content-type": "text/plain"
      },
      body: JSON.stringify(formData)
    }).then(function (resp) {
      return resp.text();
    }).then(function (data) {
      console.log(data);
      results.textContent = data;
    }).catch(function (error) {
      console.error(error);
    });
  });

  //  // HERE IS THE READ FUNCTION
  //  var db = document.getElementById("db");

  //  db.addEventListener("click", function() {
  //    var results = document.getElementById("results");
  //    fetch("https://gothic-welder-217319.appspot.com?addr", {
  //      method: "GET",
  //      headers: {
  //        "content-type": "text/plain"
  //      }
  //    })
  //    .then(function(response) {
  //      return response.text();
  //    })
  //    .then(function(data) {
  //      console.log(data);
  //      results.textContent = data;
  //    })
  //    .catch(function(error) {
  //      console.log(error);
  //    })
  //  });

  var cLog = function cLog() {
    console.log("hello world");
  };
  cLog();
};
//# sourceMappingURL=main.js.map
