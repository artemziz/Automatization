
let moveBtn = document.getElementById('moveTo');
let clickBtn = document.getElementById('click');
let PageDown = document.getElementById('PageDown');
let PageUp = document.getElementById('PageUp');
let Down = document.getElementById('Down');
let Up = document.getElementById('Up');


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

clickBtn.addEventListener('click',()=>{
  let x = document.getElementById('x').value;
  let y = document.getElementById('y').value;

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"click": {x:x,y:y}});
  });
  
})

PageDown.addEventListener('click',()=>{
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"PageDown": true});
  });
})

PageUp.addEventListener('click',()=>{
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"PageUp": true});
  });
})

Down.addEventListener('click',()=>{
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"Down": true});
  });
})

Up.addEventListener('click',()=>{
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"Up": true});
  });
})