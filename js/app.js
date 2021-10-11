// // console.log("Tunji Akanbi");

// let num1 = 25;
// let num2 = 30;
// let num3 = 35;
// let x = 33
// let bool1 = true;
// console.log(bool1);
// let heading1 = document.getElementById('heading1');
// // console.log(heading1);

// if(x < num1) {
//     heading1.innerHTML = "We have <span>" + x + " </span>days to go";
// }
// else if(x < num2) {
//     heading1.innerHTML = "We have <span>" + x + " </span>days to go";
// }
// else if((x > num2) && (x < num3))  {
//     heading1.innerHTML = "We have <span>" + x + " </span>days to go";
// }
// else {
//     heading1.innerHTML = "We have <span>" + x + " </span>days to go";
// }

const colors = new Array(
    "#0000FF",
    "#8A2BE2",
    "#7FFF00",
    "#DC143C",
    "#00FFFF",
    "#FF7F50",
    "#E9967A",
    "#483D8B",
    "#00CED1"
);
console.log(colors.length);

let div1 = document.getElementById("div1");
// function ChangeColor() {
//   let randomColor = Math.floor(Math.random() * colors.length);
//   div1.style.backgroundColor = colors[randomColor];
//   console.log(randomColor);
// }

for (let i = 0; i < colors.length; i++) {
    // div1.style.backgroundColor = colors[i];
    console.log(colors[i]);
    let grid_Divs = document.querySelectorAll("#grid-divs section");
    // console.log(grid_Divs);
    grid_Divs[i].style.backgroundColor = colors[i];
}