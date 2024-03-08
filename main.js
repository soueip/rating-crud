var rating = document.getElementsByTagName("h3");
var subBtn = document.getElementById("sub");
var cartOne = document.getElementsByClassName("card")[0];
var roux = document.getElementsByClassName("iconStar2");
var cartTwo = document.getElementsByClassName("cardDeux")[0];

for (let i = 0; i < rating.length; i++) {
  rating[i].addEventListener("click", function () {
    // console.log(rating[i].innerHTML)
    roux[i].classList.add("clickedd");
    subBtn.onclick = function () {
      cartOne.classList.add("hide");
      cartTwo.classList.remove("hide");
      document.getElementById("val").innerText = rating[i].innerHTML;
    };
  });
}
