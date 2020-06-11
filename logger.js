document.body.addEventListener('mousedown', function(event) { console.log('MOUSEDOWN\n\n', event); });
    document.body.addEventListener('click', function(event) { console.log('CLICK\n\n', event); });
    document.body.addEventListener('mouseup', function(event) { console.log('MOUSEUP\n\n', event); });
    document.body.addEventListener('mousemove', function(event) {
        if(!event.isTrusted){
            console.log('MOUSEMOVE\n\n', event);
        }
         
    });
    document.body.addEventListener('touchstart', function(event) { console.log('MOUSEMOVE\n\n', event); });
    document.body.addEventListener('touchmove', function(event) { console.log('MOUSEMOVE\n\n', event); });
    document.body.addEventListener('touchend', function(event) { console.log('MOUSEMOVE\n\n', event); });

    