$(document).ready(function () {
  page.init()
})
var username = "";
var page = {
  init: function () {
    page.styling();
    page.events();
  },

  styling: function () {

  },

  events: function () {
    $('.loginForm').on("submit", function (event) {
      event.preventDefault();
      username = $('input[name ="username"]').val();
      localStorage.setItem('username', username);
      page.addLogin();
    });

    $('body').on("click", ".navli", function(event){
        event.preventDefault();
        var selectedPage = '.' + $(this).attr('rel');
        $(selectedPage).siblings('section').removeClass('active');
        $(selectedPage).addClass('active');
    });

    $('body').on("click", ".createSubmit" function (event) {
      event.preventDefault();
      addEvent();
    } )
  },

  addLogin: function () {
    $.ajax ({

      url: "/login",
      method: "POST",
      success: function (successString) {
        console.log("SUCCESS OF LOGIN", successString);
         if (successString === "login success") {
          $('.login').addClass("inactive");
          $('.mainContainer').removeClass("inactive");
         }
         else {
           $('.loginForm').prepend('<div class="tryAgain">That username already exists. Please try again.</div>')
         }
      }
    });
  },

  addEvent: function (newEvent) {
    $.ajax ({
      url: "",
      method: "POST",
      data: newEvent,
      success: function (data) {
        console.log("EVENT CREATED", data)
      },
      error: function (err) {
        console.log("ERROR", err)
      }
    })
  },











}
