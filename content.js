chrome.runtime.onMessage.addListener(request=>{
  if(request.ans==="true")
  dowork();
})


// document.addEventListener('click',dowork);
// console.log(">>>>>>>>>>>");
function dowork(){
  // window.alert("houiiuiu");
  let d=document.getElementsByClassName("text-heading-xlarge");
  let location=document.getElementsByClassName("pv-text-details__left-panel");
  let prpic=document.getElementsByClassName("pv-top-card-profile-picture__image--show");
  let lc=(location[1].innerText).substring(0,(location[1].innerText).lastIndexOf(" ")-7);
  let comp=document.getElementsByClassName("pv-text-details__right-panel-item");
  // console.log("Name>>>",d[0].innerHTML);

// console.log(location);
// console.log("linkedin_profile_link>>>>>>>>>",location[0].baseURI);

// console.log("Profile picture>>>>>",prpic[0].src);


// console.log("location>>>>>>>>",lc);
// console.log("Designation>>>>>>>",location[0].children[1].innerText);

// console.log("Company>>>>>>>>>",comp[0].children[0].innerText);
// console.log("Contact Info>>>>",location[1].children[1].baseURI);





// let edu=document.querySelectorAll("ul");
// console.log(edu);
// let exp=document.querySelectorAll("ul");
//
// console.log(exp);
///////////////////////////////////
let js={
  name:d[0].innerHTML,
  linkedIn_profile_link:location[0].baseURI,
  profile_picture:prpic[0].src,
  location:lc,
  designation:location[0].children[1].innerText,
  company:comp[0].children[0].innerText,
  //contact_info has all contact details the user has added i.e., phone,email etc
  contact_info:location[1].children[1].baseURI


}

let jsonData=JSON.stringify(js);



////////////////////////////////

download(jsonData, 'json.txt', 'text/plain');

}

function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
    console.log("Success!!!!!!!!!!!!!!!!");
}
