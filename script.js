var trigger = 0;
const button = document.getElementById("submitInput");
const button2 = document.getElementById("action");
const inputStyle = document.getElementById("inputAccount");
var version = "";
button.addEventListener("click", function() {
 if (trigger === 0) {
  var input = document.getElementById("inputAccount").value;
  var img = document.getElementById("loading");
  if (input === "") {
    inputStyle.style.cssText = "background-color: #d1d1d1; outline: 1px solid #333;";
    document.getElementById("description3").style.top = "-24px";
    setTimeout(() => {
      inputStyle.style.cssText = "background-color: #f1f1f1; outline: 1px solid #ccc;";
      document.getElementById("description3").style.top = "10px";
    }, "3000");
    return;
  }
  button.style.cssText = "transition: 1s";
  setTimeout(() => {
    button.style.cssText = "transition: 1s;transform: scale(1) !important; width: 626px; color: #222; background-color: #222";
  }, "100");
  setTimeout(() => {
    img.style.opacity = "1";
  }, "400");
  var matchingPattern = /^(?:https?:\/\/)?((?:www\.)?[^:\/?\n]+)/img;;
  var match = matchingPattern.exec(input);
  if(match && match[1]) {
    console.log(match[1]);
    input = match[1];
  }
  fetch('https://cors-anywhere.herokuapp.com/https://' + input + '/docs/api/v3/')
  .then(response => response.text())
  .then(data => {
    const versionRegex = /version=([0-9.]+)/; 
    const matchedGroups = data.match(versionRegex);
    if (matchedGroups && matchedGroups[1]) {
      version = matchedGroups[1];
      trigger=2;
      setTimeout(() => {
        img.style.opacity = "0";
      }, "1950");
      setTimeout(() => {
        button.innerHTML = `Your current LiveAgent version is <strong><u>${matchedGroups[1]}</u></strong> <img id='copy' src='https://cdn-icons-png.flaticon.com/512/1621/1621635.png'/><img id='copy2' src='https://png.pngtree.com/png-vector/20220801/ourmid/pngtree-check-icon-from-business-bicolor-set-accept-like-apply-vector-png-image_19358580.jpg'/>`;
        button.style.color = "#f1f1f1";
        button2.style.right = "-32px";
        button2.style.fontSize = "40px";
        button2.style.lineHeight = "44px";
        button2.innerHTML = "&times;";
      }, "2000");
      setTimeout(() => {
        const copy = document.getElementById("copy");
        copy.style.opacity = "1";
      }, "2500");
    } else {
      setTimeout(() => {
      trigger=1;
        button.innerHTML = "Your LiveAgent version could not be fetched!<img id='copy' src='' style='display:none;'/>";
        button.style.color = "#f1f1f1";
        button2.style.right = "-32px";
        button2.style.fontSize = "30px";
        button2.style.lineHeight = "46px";
        button2.innerHTML = "&#8634;";
        document.getElementById("description2").style.top = "-24px";
      }, "2000");
      setTimeout(() => {
        document.getElementById("description2").style.top = "10px";
      }, "9000");
    }
  })
 } else if (trigger === 2) {
   navigator.clipboard.writeText(version);
   document.getElementById("copy").style.display = "none";
   document.getElementById("copy2").style.display = "inline";
   document.getElementById("copy2").style.opacity = "1";
  setTimeout(() => {
   document.getElementById("copy2").style.opacity = "0";
  }, "1500");
  setTimeout(() => {
   document.getElementById("copy").style.display = "inline";
   document.getElementById("copy2").style.display = "none";
  }, "2100");
 } else {
   return;
 }
});
button2.addEventListener("click", function() {
  const copy = document.getElementById("copy");
  copy.style.opacity = "0";
  trigger=0;
  button2.style.right = "0px";
  button.style.cssText = "transition: 0.8s; color: #222; transform: scale(1); width: 320px; background-color: #222;";
  setTimeout(() => {
    button.innerHTML = "Get Version";
    button.style.cssText = "transition: 1.2s; color: #222; transform: scale(1); width: 120px; background-color: #222;";
  }, "500");
  setTimeout(() => {
    button.innerHTML = "Get Version<img id='loading' src='https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif'/>";
    button.style.cssText = "width: 120px; color: #f1f1f1; transition: 0.3s;";
  }, "1100");
})
