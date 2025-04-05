var para = document.querySelector("p");
var btn = document.querySelector("button");

btn.addEventListener("click", function () {
  setTimeout(function () {
    var fSize = Math.floor(Math.random() * 41) + 10;
    para.style.fontSize = fSize + "px";
    console.log(fSize)
  },1500);
});
