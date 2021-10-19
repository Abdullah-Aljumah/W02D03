// Task One Change the size of a heading
btn1.addEventListener("click", () => {
  const heading = document.querySelector("h1");
  heading.style.fontSize = "50px";
});
// End Task One

// Task Two Change the font style of a paragraph
btn2.addEventListener("click", () => {
  const container = document.querySelector("p");
  container.style.fontFamily = "courier";
});
// End Task Two

// Task Three Highlight a paragraph with back-ground
btn3.addEventListener("click", () => {
  const container = document.querySelector("p");
  container.style.backgroundColor = "red";
});
// End Task Three

// Task Four Hide an Image
btn4.addEventListener("click", () => {
  const container = document.querySelector("img");
  container.style.display = "none";
});
// End Task Four

// Task Five Alternate between two images
btn5.addEventListener("click", () => {
  const img1 = document.getElementById("img1");
  const img2 = document.getElementById("img2");
  const img = img1.src;
  img1.src = img2.src;
  img2.src = img;
});
// End Task Five

// Task Six Change an image when the mouse moves onto it.
const img3 = document.getElementById("img3");
img3.addEventListener("mouseover", () => {
  img3.src =
    "https://media.istockphoto.com/photos/transportation-and-technology-concept-its-mobility-as-a-service-picture-id1271634448?b=1&k=20&m=1271634448&s=170667a&w=0&h=V8TveuLvpTCW-s2XbJDI-vBnRIBCOfwkrGmqxCHdCuM=";
});
img3.addEventListener("mouseout", () => {
  img3.src = "https://www.industrialempathy.com/img/remote/ZiClJf-640w.avif";
});
// End Task Six

// Task Se7en alert on the page when a user right clicks on a specific image.
const alert1 = document.querySelector("#alert1");
alert1.addEventListener("contextmenu", () => {
  alert("ALERT!!");
});
// End Task Se7en

// Task Eight alert on the page when a user enters data into a input.
const alert2 = document.querySelector("#input1");
alert2.addEventListener("change", () => {
  alert("Input Alert!!");
});
// End Task Eight

// Task Nine (the rest is in the HTML file)
function load() {
  alert("Page is loaded");
}
// End Task Nine

// Task Ten Highlight all paragraphs when the mouse moves over them
const pp = document.querySelector(".paragraphs");
pp.addEventListener("mouseover", () => {
  pp.style.color = "blue";
});
const pp2 = document.querySelector(".paragraphs");
pp2.addEventListener("mouseout", () => {
  pp2.style.color = "black";
});
// End Task Ten
