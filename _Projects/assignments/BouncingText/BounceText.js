// This is moveTextfuns.js - used with moveText.html

   var dom, x, y, finalX = 0, finalY = 0;

// ************************************************* //
// A function to initialize the x and y coordinates
//  of the current position of the text to be moved,
//  and then call the mover function

   function initText() {
      dom = document.getElementById('theText').style;
      /*Grabs the start coordinates for the text as specified in the HTML doc*/
      var ix = dom.left;
      var iy = dom.top;
      ix = ix.match(/\d+/);
      iy = iy.match(/\d+/);
      moveText(ix, iy, 10, 20, 0);
   }
   /*move text is setup so x and y are current values*/
   function moveText(currentX, currentY, physX, physY, bounceCounter) {
      var HEIGHT = window.innerHeight-45;
      var WIDTH  = window.innerWidth-45;


      if (currentX >= WIDTH || (currentX <= 0 && physX < 0)) {
          physX=-physX;
          bounceCounter++;
          document.getElementById('theText').innerHTML = bounceCounter;
      }
      if (currentY >= HEIGHT || (currentY <= 0 && physY < 0)) {
          physY=-physY;
          bounceCounter++;
          document.getElementById('theText').innerHTML = bounceCounter;
      }
      if (bounceCounter > 7) {
        document.getElementById('theText').innerHTML = '8 and Done';
        throw new Error("Done :)");
      }
      currentX += physX;
      currentY += physY;
      /*set if the counter is less than 8 here when get there
      this portion I THINK actually does the moving*/
      /*dom.left and dom.top actually change the style position in the html.  The settimeout just recursively calls the method again*/

      dom.left = currentX + "px";
      dom.top = currentY + "px";
      setTimeout("moveText(" + currentX + "," + currentY + "," + physX + "," + physY + "," + bounceCounter + ")", 10);
   }
