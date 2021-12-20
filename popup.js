let button=document.getElementById("button");




let ans="false";
button.addEventListener("click",function(){

  var audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/clickUp.mp3');
  audio.load();
  audio.play();

  // console.log("gotchaa");
   ans="true";
  // get all the google tabs and send a message to their tabs
chrome.tabs.query({ url: 'https://*.linkedin.com/*' }, tabs => {

    chrome.tabs.sendMessage(tabs[0].id, { ans } )

});
})
