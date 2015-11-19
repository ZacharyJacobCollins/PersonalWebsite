
function Intro() {
    window.ScrollLock();
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
          //  .write("Welcome: My name is Zac.", 1000)
          //  .write("Welcome:I am a Software Engineer.", 2000)
          //  .write("Welcome:And this is my site.", 300, ".", 300, ".")
            .write(function() {
            window.document.getElementById('intro-button').style.visibility = "visible";
            window.document.getElementById('intro-button').style.opacity = "1";
          });
      var body = document.getElementsByTagName("BODY")[0];
  window.theater = theater;
}

function TypingIntro() {
  $(function(){
      $('#typing-intro').typed({
             strings: ["&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;INITSEG  = DEF_INITSEG</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;SYSSEG   = DEF_SYSSEG</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;SETUPSEG = DEF_SETUPSEG</br></br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;#ifndef __BIG_KERNEL__</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;.byte</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;#else</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;.byte   LOADED_HIGH</br></br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;good_sig()</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;char loadflags;</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;char type_of_loader;</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;LOADHIGH = 1</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;DS = CS - DELTA_INITSEG;</bremsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;if ( (loadflags & LOADHIGH) && !type_of_loader ) {</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;prtstr(Wrong loader, giving up...);</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;goto no_sig_loop;</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;}</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;}</br></br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;loader_ok()</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;E820NR  = 0x1E8</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;E820MAP = 0x2D0</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(long)DS:[0x1E0] = 0;</br></br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;#ifndef STANDARD_MEMORY_BIOS_CALL</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(byte)DS:[0x1E8] = 0;</br></br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;struct efi_variable</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;grub_efi_guid_t guid;</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;grub_uint32_t namelen;</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;grub_uint32_t size;</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;multiboot_uint16_t reserved;</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;};</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;}</br></br></br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;}</br></br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</br></br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;initialize() {</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;multiboot_uint32_t size;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;INITSEG  = DEF_INITSEG</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;SYSSEG   = DEF_SYSSEG</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;SETUPSEG = DEF_SETUPSEG</br></br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;#ifndef __BIG_KERNEL__</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;.byte</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;#else</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;.byte   LOADED_HIGH</br></br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;good_sig()</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;char loadflags;</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;char type_of_loader;</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;LOADHIGH = 1</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;DS = CS - DELTA_INITSEG;</bremsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;if ( (loadflags & LOADHIGH) && !type_of_loader ) {</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;prtstr(Wrong loader, giving up...);</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;goto no_sig_loop;</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;}</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;}</br></br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;loader_ok()</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;E820NR  = 0x1E8</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;E820MAP = 0x2D0</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(long)DS:[0x1E0] = 0;</br></br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;#ifndef STANDARD_MEMORY_BIOS_CALL</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(byte)DS:[0x1E8] = 0;</br></br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;struct efi_variable</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;grub_efi_guid_t guid;</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;grub_uint32_t namelen;</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;grub_uint32_t size;</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;multiboot_uint16_t reserved;</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;};</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;}</br></br></br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;}</br></br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</br></br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;initialize() {</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;multiboot_uint32_t size;"],
             typeSpeed: 0,
             backDelay: 20,
             loop: false,
             loopCount: false,
    });
  });
}

function Typed() {
    
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
