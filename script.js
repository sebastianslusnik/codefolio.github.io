function loader() {
  setTimeout(() => {
    document.getElementById("loader1").style.left = "49%";
    document.getElementById("loader2").style.left = "44%";
  }, "800");
  setTimeout(() => {
    document.getElementById("loader1").style.left = "50%";
    document.getElementById("loader2").style.left = "43%";
  }, "1550");
  setTimeout(() => {
    document.getElementById("intro").style.visibility = "visible";
  }, "1600");
  setTimeout(() => {
    document.getElementById("loader1").style.left = "75%";
    document.getElementById("loader2").style.left = "27%";
    document.getElementById("loader1").style.width = "0px";
    document.getElementById("loader2").style.width = "0px";
  }, "1650");
  setTimeout(() => {
    document.getElementById("dynamic_header").style.top = "380px";
    document.getElementById("dynamic_footer").style.top = "-370px";
    document.getElementById("dynamic_header").style.left = "650px";
    document.getElementById("dynamic_footer").style.left = "-480px";
    document.getElementById("dynamic_header").style.fontSize = "40px";
    document.getElementById("dynamic_footer").style.fontSize = "26px";
  }, "3000");
  setTimeout(() => {
    document.getElementById("social").style.top = "43px";
    document.getElementById("social").style.opacity = "1";
    document.getElementById("copyright").style.bottom = "20px";
    document.getElementById("copyright").style.opacity = "1";
  }, "4000");
  setTimeout(() => {
    document.getElementById("one").style.opacity = "0";
    document.getElementById("three").style.opacity = "0";
    document.getElementById("four").style.opacity = "1";
    document.getElementById("one").style.fontSize = "0px";
    document.getElementById("three").style.fontSize = "0px";
    document.getElementById("dynamic_footer").style.left = "-570px";
    document.getElementById("dynamic_header").style.left = "562px";
  }, "5000");
  setTimeout(() => {
    document.getElementById("main").style.opacity = "1";
    document.getElementById("main").style.left = "50%";
    document.getElementById("paginator").style.opacity = "1";
    document.getElementById("paginator").style.top = "88.5%";
  }, "6000");
  setTimeout(() => {
    document.getElementById("heading").style.opacity = "1";
  }, "7000");
  setTimeout(() => {
    document.getElementById("erste").style.opacity = "1";
    document.getElementById("erste").style.height = "82%";
  }, "8000");
  setTimeout(() => {
    document.getElementById("cvajte").style.opacity = "1";
    document.getElementById("cvajte").style.height = "82%";
  }, "8500");
  setTimeout(() => {
    document.getElementById("dritte").style.opacity = "1";
    document.getElementById("dritte").style.height = "82%";
  }, "9000");
  setTimeout(() => {
    document.getElementById("lefter").style.visibility = "visible";
    document.getElementById("righter").style.visibility = "visible";
  }, "9500");
  setTimeout(() => {
    document.getElementById("lefter").style.opacity = ".1";
    document.getElementById("righter").style.opacity = ".1";
  }, "10000");
}












