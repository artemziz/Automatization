chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.moveTo ) { 
        console.log(request.moveTo);
        let elem1 = {
          x:request.moveTo.x1,
          y:request.moveTo.y1
        };
        let elem2 = {
          x:request.moveTo.x2,
          y:request.moveTo.y2
        };
        virtualpointer.move_mouse_to_element(elem1, request.moveTo.speed);
        virtualpointer.move_mouse_to_element(elem2, request.moveTo.speed);
      }
    }
);