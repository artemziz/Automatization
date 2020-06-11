
let moveBtn = document.getElementById('moveTo');

moveBtn.addEventListener('click',()=>{
    let x1 = document.getElementById('x1').value;
    let y1 = document.getElementById('y1').value;
    let x2 = document.getElementById('x2').value;
    let y2 = document.getElementById('y2').value;
    let speed = document.getElementById('speed').value || 2500;

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"moveTo": {x1:x1,y1:y1,x2:x2,y2:y2,speed:speed}});
      });
})
