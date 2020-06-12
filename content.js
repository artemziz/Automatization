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
      if(request.click){
        console.log(request.click);
        let {x,y} = request.click;
        let i = 9;
        if(!Visible({x,y})){
          if(window.pageYOffset>y){
            window.scrollTo(x,y-document.documentElement.clientHeight);
          }else{
            window.scrollTo(x,y+document.documentElement.clientHeight);
          }
        }
        console.log(Visible({x,y}) );
        
        if(document.elementFromPoint(x,y)){
          document.elementFromPoint(x,y).click();
        }
        
        
       
      }
      if(request.PageDown){
        window.scrollBy({
          top: 0.87*document.documentElement.clientHeight,
          behavior: 'smooth'
      });
      }
      if(request.PageUp){
        window.scrollBy({
          top: -0.87*document.documentElement.clientHeight,
          behavior: 'smooth'
      });
      }
      if(request.Down){
        window.scrollBy({
          top: 100,
          behavior: 'smooth'
      });
      }
      if(request.Up){
        window.scrollBy({
          top: -100,
          behavior: 'smooth'
      });
      }
    }
);

function Visible(target) {
  // Все позиции элемента
  let targetPosition = {
      top: window.pageYOffset + target.y,
      left: window.pageXOffset + target.x,
      right: window.pageXOffset + (document.body.clientWidth - target.x),
      bottom: window.pageYOffset + (document.body.clientHeight - target.y)
    },
    // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

  if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
    targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
    targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
    // Если элемент полностью видно, то запускаем следующий код    
    return true;
  } else {    
    return false;
  };
};

