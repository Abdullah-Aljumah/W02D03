btn1.addEventListener("click", () => {
  const heading = document.querySelector("h1");
  heading.style.fontSize = "50px";
});

btn2.addEventListener("click", () => {
  const container = document.querySelector("p");
  container.style.fontFamily = "courier";
});

btn3.addEventListener("click", () => {
  const container = document.querySelector("p");
  container.style.backgroundColor = "red";
});

btn4.addEventListener("click", () => {
  const container = document.querySelector("img");
  container.style.display = "none";
});

btn5.addEventListener("click", () => {
  const img1 = document.getElementById("img1");
  const img2 = document.getElementById("img2");
  const img = img1.src;
  img1.src = img2.src;
  img2.src = img;
});
const img3 = document.getElementById("img3");
img3.addEventListener("mouseover", ()=>{
    img3.src='https://media.istockphoto.com/photos/transportation-and-technology-concept-its-mobility-as-a-service-picture-id1271634448?b=1&k=20&m=1271634448&s=170667a&w=0&h=V8TveuLvpTCW-s2XbJDI-vBnRIBCOfwkrGmqxCHdCuM=';
})
img3.addEventListener('mouseout',()=>{
img3.src="https://www.industrialempathy.com/img/remote/ZiClJf-640w.avif"
})

const alert1 = document.querySelector("#alert1");
alert1.addEventListener("contextmenu",()=>{
    alert("ALERT!!")
})

const alert2 = document.querySelector("#input1")
alert2.addEventListener("change", ()=>{
alert("Input Alert!!")
})

function load(){
    alert("Page is loaded");
}
