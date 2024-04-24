const button = document.getElementById("submitInput");
button.addEventListener("click", function() {
  //var input = document.getElementById("inputAccount").value;
  var input = "trial.ladesk.com";
  button.style.transition = "1s";
  setTimeout(() => {
    button.style.width = "626px";
    button.style.color = "#222";
    button.style.backgroundColor = "#222";
  }, "100");
  fetch('https://cors-anywhere.herokuapp.com/https://' + input + '/docs/api/v3/')
  .then(response => response.text())
  .then(data => {
    const versionRegex = /version=([0-9.]+)/; 
    const matchedGroups = data.match(versionRegex);
    if (matchedGroups && matchedGroups[1]) {
      setTimeout(() => {
        button.value = `Your current LiveAgent version is ${matchedGroups[1]}`;
        button.style.color = "#f1f1f1";
      }, "2000");
    } else {
      setTimeout(() => {
      button.value = "Your LiveAgent version could not be fetched!";
        button.style.color = "#f1f1f1";
      }, "2000");
    }
  })
})
