// window.addEventListener("load", function () {

//   //code corresponding to signup form...
//   // --------------------------------------------------------
//     var signup_form = document.getElementById("signup-form");
//     signup_form.addEventListener("submit", function (event) {
//         // event.preventDefault();
//         var XHR = new XMLHttpRequest();
//         var form_data = new FormData(signup_form);

//         // Set up request
//         XHR.open("POST", "api/signup_submit.php");

//         // On success
//         XHR.addEventListener("load", function(event) {
//             document.getElementById("loading").style.display = 'none';

//             if( XHR.status === 200 ){
//               // Use this console.log code lines to check the response and debug the code
//               // console.log( "Response: " + XHR.response );
//               // console.log( "Response Text: " + XHR.responseText );

//               var response = JSON.parse(XHR.responseText);
//               if ( response.success ) {
//                   alert(response.message);
//                   window.location.href = "index.php";
//               }
//               else {
//                   alert(response.message);
//               }
//             }
//             else{
//               alert("Something Went wrong!");
//             }
//         });

//         // On error
//         XHR.addEventListener("error", on_error);

//         // Form data is sent with request
//         XHR.send(form_data);

//         document.getElementById("loading").style.display = 'block';
//         event.preventDefault();
//     });


//    //code corresponding to login form...
//    // ----------------------------------------------------
//    var login_form = document.getElementById("login-form");
//    login_form.addEventListener("submit", function (event) {
//        // event.preventDefault();
//        var XHR = new XMLHttpRequest();
//        var form_data = new FormData(login_form);

//        // Set up request
//        XHR.open("POST", "api/login_submit.php");

//        // On success
//        XHR.addEventListener("load", function(event) {
//            document.getElementById("loading").style.display = 'none';

//            if( XHR.status === 200 ){
//              // Use this console.log code lines to check the response and debug the code
//              console.log( "Response: " + XHR.response );
//              console.log( "Response Text: " + XHR.responseText );

//              var response = JSON.parse(XHR.responseText);
//              if ( response.success ) {
//                  alert(response.message);
//                  window.location.href = "index.php";
//              }
//              else {
//                  alert(response.message);
//              }
//            }
//            else{
//              alert("Something Went wrong!");
//            }
//        });

//        // On error
//        XHR.addEventListener("error", on_error);

//        // Form data is sent with request
//        XHR.send(form_data);

//        document.getElementById("loading").style.display = 'block';
//        event.preventDefault();
//    });
// });


// var on_error = function (event) {
//     document.getElementById("loading").style.display = 'none';
//     // alert('Oops! Something went wrong! (on_error)');
//     alert('Connection to server could not be established!');
// };


// window.addEventListener("load", function () {

//   var darkModeToggle = document.getElementById("darkModeToggle");
//   var body = document.body;

//   // Check if dark mode is enabled in localStorage
//   if (localStorage.getItem("darkMode") === "enabled") {
//     body.classList.add("dark-mode");
//   }

//   // Event listener for dark mode toggle
//   darkModeToggle.addEventListener("click", function() {
//     console.log("Dark Mode Toggle Clicked!");
//     if (body.classList.contains("dark-mode")) {
//       body.classList.remove("dark-mode");
//       localStorage.setItem("darkMode", "disabled");
//     } else {
//       body.classList.add("dark-mode");
//       localStorage.setItem("darkMode", "enabled");
//     }
//   });
//   // Code corresponding to signup form
//   // --------------------------------------------------------
//   var signup_form = document.getElementById("signup-form");
//   signup_form.addEventListener("submit", function (event) {
//     var XHR = new XMLHttpRequest();
//     var form_data = new FormData(signup_form);

//     // Set up request
//     XHR.open("POST", "api/signup_submit.php");

//     // On success
//     XHR.addEventListener("load", function(event) {
//       document.getElementById("loading").style.display = 'none';

//       if( XHR.status === 200 ){
//         var response = JSON.parse(XHR.responseText);
//         if ( response.success ) {
//             alert(response.message);
//             window.location.href = "index.php";
//         }
//         else {
//             alert(response.message);
//         }
//       }
//       else{
//         alert("Something Went wrong!");
//       }
//     });

//     // On error
//     XHR.addEventListener("error", on_error);

//     // Form data is sent with request
//     XHR.send(form_data);

//     document.getElementById("loading").style.display = 'block';
//     event.preventDefault();
//   });

//   // Code corresponding to login form
//   // ----------------------------------------------------
//   var login_form = document.getElementById("login-form");
//   login_form.addEventListener("submit", function (event) {
//     var XHR = new XMLHttpRequest();
//     var form_data = new FormData(login_form);

//     // Set up request
//     XHR.open("POST", "api/login_submit.php");

//     // On success
//     XHR.addEventListener("load", function(event) {
//       document.getElementById("loading").style.display = 'none';

//       if( XHR.status === 200 ){
//         console.log( "Response: " + XHR.response );
//         var response = JSON.parse(XHR.responseText);
//         if ( response.success ) {
//             alert(response.message);
//             window.location.href = "index.php";
//         }
//         else {
//             alert(response.message);
//         }
//       }
//       else{
//         alert("Something Went wrong!");
//       }
//     });

//     // On error
//     XHR.addEventListener("error", on_error);

//     // Form data is sent with request
//     XHR.send(form_data);

//     document.getElementById("loading").style.display = 'block';
//     event.preventDefault();
//   });
// });

// // Error handling
// var on_error = function (event) {
//   document.getElementById("loading").style.display = 'none';
//   alert('Connection to server could not be established!');
// };

// window.addEventListener("load", function () {

//   // Dark Mode Toggle
//   var darkModeToggle = document.getElementById("darkModeToggle");
//   var body = document.body;

//   // Check if dark mode is enabled in localStorage
//   if (localStorage.getItem("darkMode") === "enabled") {
//     body.classList.add("dark-mode");
//     // Change button color and icon
//     darkModeToggle.classList.remove('btn-light');
//     darkModeToggle.classList.add('btn-dark');
//     darkModeToggle.querySelector('img').src = './img/lightmode.png';
//   }

//   // Event listener for dark mode toggle
//   darkModeToggle.addEventListener("click", function() {
//     console.log("Dark Mode Toggle Clicked!");
//     if (body.classList.contains("dark-mode")) {
//       body.classList.remove("dark-mode");
//       localStorage.setItem("darkMode", "disabled");
//       // Reset button color and icon
//       darkModeToggle.classList.remove('btn-dark');
//       darkModeToggle.classList.add('btn-light');
//       darkModeToggle.querySelector('img').src = 'C:\xampp\htdocs\internshala_project\img\darkmodemoon.png';
//     } else {
//       body.classList.add("dark-mode");
//       localStorage.setItem("darkMode", "enabled");
//       // Change button color and icon
//       darkModeToggle.classList.remove('btn-light');
//       darkModeToggle.classList.add('btn-dark');
//       darkModeToggle.querySelector('img').src = './img/lightmode.png';
//     }
//   });

//   // Signup Form Submission
//   var signup_form = document.getElementById("signup-form");
//   signup_form.addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent default form submission

//     var XHR = new XMLHttpRequest();
//     var form_data = new FormData(signup_form);

//     // Set up request
//     XHR.open("POST", "api/signup_submit.php");

//     // On success
//     XHR.addEventListener("load", function(event) {
//       document.getElementById("loading").style.display = 'none';

//       if( XHR.status === 200 ){
//         var response = JSON.parse(XHR.responseText);
//         if (response.success) {
//           alert(response.message);
//           window.location.href = "index.php";
//         } else {
//           alert(response.message);
//         }
//       } else {
//         alert("Something Went wrong!");
//       }
//     });

//     // On error
//     XHR.addEventListener("error", function() {
//       document.getElementById("loading").style.display = 'none';
//       alert('Connection to server could not be established!');
//     });

//     // Show loading indicator
//     document.getElementById("loading").style.display = 'block';

//     // Send form data
//     XHR.send(form_data);
//   });

//   // Login Form Submission
//   var login_form = document.getElementById("login-form");
//   login_form.addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent default form submission

//     var XHR = new XMLHttpRequest();
//     var form_data = new FormData(login_form);

//     // Set up request
//     XHR.open("POST", "api/login_submit.php");

//     // On success
//     XHR.addEventListener("load", function(event) {
//       document.getElementById("loading").style.display = 'none';

//       if( XHR.status === 200 ){
//         var response = JSON.parse(XHR.responseText);
//         if (response.success) {
//           alert(response.message);
//           window.location.href = "index.php";
//         } else {
//           alert(response.message);
//         }
//       } else {
//         alert("Something Went wrong!");
//       }
//     });

//     // On error
//     XHR.addEventListener("error", function() {
//       document.getElementById("loading").style.display = 'none';
//       alert('Connection to server could not be established!');
//     });

//     // Show loading indicator
//     document.getElementById("loading").style.display = 'block';

//     // Send form data
//     XHR.send(form_data);
//   });
// });


// window.addEventListener("load", function () {

//   // Dark Mode Toggle
//   var darkModeToggle = document.getElementById("darkModeToggle");
//   var body = document.body;

//   // Check if dark mode is enabled in localStorage
//   if (localStorage.getItem("darkMode") === "enabled") {
//     body.classList.add("dark-mode");
//     // Change button color and icon for dark mode
//     darkModeToggle.classList.remove('btn-light');
//     darkModeToggle.classList.add('btn-dark');
//     darkModeToggle.querySelector('img').src = './img/lightmodemoon.png';
//   } else {
//     // Set button color and icon for light mode
//     darkModeToggle.classList.remove('btn-dark');
//     darkModeToggle.classList.add('btn-light');
//     darkModeToggle.querySelector('img').src = 'C:\xampp\htdocs\internshala_project\img\darkmodemoon.png';
//   }

//   // Event listener for dark mode toggle
//   darkModeToggle.addEventListener("click", function() {
//     console.log("Dark Mode Toggle Clicked!");
//     if (body.classList.contains("dark-mode")) {
//       body.classList.remove("dark-mode");
//       localStorage.setItem("darkMode", "disabled");
//       // Reset button color and icon for light mode
//       darkModeToggle.classList.remove('btn-dark');
//       darkModeToggle.classList.add('btn-light');
//       darkModeToggle.querySelector('img').src = 'C:\xampp\htdocs\internshala_project\img\darkmodemoon.png';
//     } else {
//       body.classList.add("dark-mode");
//       localStorage.setItem("darkMode", "enabled");
//       // Change button color and icon for dark mode
//       darkModeToggle.classList.remove('btn-light');
//       darkModeToggle.classList.add('btn-dark');
//       darkModeToggle.querySelector('img').src = './img/lightmodemoon.png';
//     }
//   });

//   // Signup Form Submission
//   var signup_form = document.getElementById("signup-form");
//   signup_form.addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent default form submission

//     var XHR = new XMLHttpRequest();
//     var form_data = new FormData(signup_form);

//     // Set up request
//     XHR.open("POST", "api/signup_submit.php");

//     // On success
//     XHR.addEventListener("load", function(event) {
//       document.getElementById("loading").style.display = 'none';

//       if( XHR.status === 200 ){
//         var response = JSON.parse(XHR.responseText);
//         if (response.success) {
//           alert(response.message);
//           window.location.href = "index.php";
//         } else {
//           alert(response.message);
//         }
//       } else {
//         alert("Something Went wrong!");
//       }
//     });

//     // On error
//     XHR.addEventListener("error", function() {
//       document.getElementById("loading").style.display = 'none';
//       alert('Connection to server could not be established!');
//     });

//     // Show loading indicator
//     document.getElementById("loading").style.display = 'block';

//     // Send form data
//     XHR.send(form_data);
//   });

//   // Login Form Submission
//   var login_form = document.getElementById("login-form");
//   login_form.addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent default form submission

//     var XHR = new XMLHttpRequest();
//     var form_data = new FormData(login_form);

//     // Set up request
//     XHR.open("POST", "api/login_submit.php");

//     // On success
//     XHR.addEventListener("load", function(event) {
//       document.getElementById("loading").style.display = 'none';

//       if( XHR.status === 200 ){
//         var response = JSON.parse(XHR.responseText);
//         if (response.success) {
//           alert(response.message);
//           window.location.href = "index.php";
//         } else {
//           alert(response.message);
//         }
//       } else {
//         alert("Something Went wrong!");
//       }
//     });

//     // On error
//     XHR.addEventListener("error", function() {
//       document.getElementById("loading").style.display = 'none';
//       alert('Connection to server could not be established!');
//     });

//     // Show loading indicator
//     document.getElementById("loading").style.display = 'block';

//     // Send form data
//     XHR.send(form_data);
//   });
// });


window.addEventListener("load", function () {

  // Dark Mode Toggle
  var darkModeToggle = document.getElementById("darkModeToggle");
  var body = document.body;

  // Check if dark mode is enabled in localStorage
  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    // Change button color and icon for dark mode
    darkModeToggle.classList.remove('btn-dark');
    darkModeToggle.classList.add('btn-light'); // White button for dark mode
    darkModeToggle.querySelector('img').src = './img/lightmodemoon1.png'; // Light mode icon
  } else {
    // Set button color and icon for light mode
    darkModeToggle.classList.remove('btn-light');
    darkModeToggle.classList.add('btn-dark'); // Dark button for light mode
    darkModeToggle.querySelector('img').src = './img/darkmodemoon1.png'; // Dark mode icon
  }

  // Event listener for dark mode toggle
  darkModeToggle.addEventListener("click", function() {
    console.log("Dark Mode Toggle Clicked!");
    if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled");
      // Reset button color and icon for light mode
      darkModeToggle.classList.remove('btn-light');
      darkModeToggle.classList.add('btn-dark');
      darkModeToggle.querySelector('img').src = './img/darkmodemoon1.png'; // Dark mode icon
    } else {
      body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
      // Change button color and icon for dark mode
      darkModeToggle.classList.remove('btn-dark');
      darkModeToggle.classList.add('btn-light'); // White button for dark mode
      darkModeToggle.querySelector('img').src = './img/lightmodemoon1.png'; // Light mode icon
    }
  });

  // Signup Form Submission
  var signup_form = document.getElementById("signup-form");
  signup_form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    var XHR = new XMLHttpRequest();
    var form_data = new FormData(signup_form);

    // Set up request
    XHR.open("POST", "api/signup_submit.php");

    // On success
    XHR.addEventListener("load", function(event) {
      document.getElementById("loading").style.display = 'none';

      if( XHR.status === 200 ){
        var response = JSON.parse(XHR.responseText);
        if (response.success) {
          alert(response.message);
          window.location.href = "index.php";
        } else {
          alert(response.message);
        }
      } else {
        alert("Something Went wrong!");
      }
    });

    // On error
    XHR.addEventListener("error", function() {
      document.getElementById("loading").style.display = 'none';
      alert('Connection to server could not be established!');
    });

    // Show loading indicator
    document.getElementById("loading").style.display = 'block';

    // Send form data
    XHR.send(form_data);
  });

  // Login Form Submission
  var login_form = document.getElementById("login-form");
  login_form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    var XHR = new XMLHttpRequest();
    var form_data = new FormData(login_form);

    // Set up request
    XHR.open("POST", "api/login_submit.php");

    // On success
    XHR.addEventListener("load", function(event) {
      document.getElementById("loading").style.display = 'none';

      if( XHR.status === 200 ){
        var response = JSON.parse(XHR.responseText);
        if (response.success) {
          alert(response.message);
          window.location.href = "index.php";
        } else {
          alert(response.message);
        }
      } else {
        alert("Something Went wrong!");
      }
    });

    // On error
    XHR.addEventListener("error", function() {
      document.getElementById("loading").style.display = 'none';
      alert('Connection to server could not be established!');
    });

    // Show loading indicator
    document.getElementById("loading").style.display = 'block';

    // Send form data
    XHR.send(form_data);
  });
});
