
function Intro() {
  //  window.ScrollLock();
    "use strict";
    var $log    = document.querySelector("#log");
    var theater = new TheaterJS();
      theater
        .describe("Welcome", { speed: .8, accuracy: 1, invincibility: 4 }, "#welcome")
      theater
        .on("*", function (eventName, originalEvent, sceneName, arg) {
              var args  = Array.prototype.splice.apply(arguments, [3]),
              log   = '{\n      name: "' + sceneName + '"';
              log += ",\n      args: " + JSON.stringify(args).split(",").join(", ").replace(/</g, '&lt;').replace(/>/g, '&gt;');
              log += "\n    }";

          })
          .on("say:start, erase:start", function (eventName) {
              var self    = this,
                  current = self.current.voice;
              self.utils.addClass(current, "saying");
          })
          .on("say:end, erase:end", function (eventName) {
              var self    = this,
                  current = self.current.voice;
              self.utils.removeClass(current, "saying");
          });
      theater
            .write("Welcome:", 2000)
            .write("Welcome:Hello there. ", 1200)
            //.write("Welcome: My name is Zac.", 1000)
          //  .write("Welcome:I am a Software Engineer.", 2000)
            //.write("Welcome:And this is my site.", 300, ".", 300, ".")
            .write(function() {
            window.document.getElementById('intro-button').style.visibility = "visible";
            window.document.getElementById('intro-button').style.opacity = "1";
          });
      var body = document.getElementsByTagName("BODY")[0];
  window.theater = theater;
}

function ScrollLock() {
  $('body').css('overflow','hidden');
  $('body').attr('scroll','no');
}

function ScrollUnlock ()  {
  $('body').css('overflow','visible');
  $('body').attr('scroll','yes');
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

function checkCookie() {
    var username=getCookie("introCookie");
    if (username!="") {
        window.location="/zcollin1/_HTML/home.html"
    }
}
