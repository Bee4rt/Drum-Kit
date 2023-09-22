// const w = document.querySelector(".w");
// const a = document.querySelector(".a");
// const s = document.querySelector(".s");
// const d = document.querySelector(".d");
// const j = document.querySelector(".j");
// const k = document.querySelector(".k");
// const l = document.querySelector(".l");

const numberOfBtn = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfBtn; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", () => {
    console.log("clicked!");
  });
}
