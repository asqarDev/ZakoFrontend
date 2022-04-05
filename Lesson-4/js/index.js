// let a = parseFloat(prompt("a = "))
// if(a > 0){
//     alert(true)
// }else if(a === 0){
//     alert("qiymatlar teg")
// }
// else{
//     alert(false)
// }

// var kabisayili = 366;

// var yil = parseFloat(prompt("yil "));

// if (yil % 100 == 0 || yil % 4 == 0) {
//   alert("kabisa yili 366 kun");
// } else {
//   alert("kabisa yilimas 365 kun");
// }

// var a = 10;

// for (var i = 1; i <= a; i++) {

//   console.log(massiv)
// }
// var a = 10;
// var i = 1;
// var sum1 = 0;
// var sum2 = 0;
// while (i < a) {
//   if (i % 2 == 0) {
//     sum1 += i;
//     console.log(sum1);
//   } else {
//     sum2 += i;
//     console.log(sum2);
//   }
//   i += 1;
// }

// var a = 10;
// var i = 0;
// do {
//   i += 1;
//   console.log(i);
// } while (i < a);

// n = 23;
// let lst = [];
// for (i = 1; i <= n; i++) {
//   lst.push(i);
// }
// document.write(lst);
// console.log(lst);

document.querySelector("#addBtn").addEventListener("click", function () {
  var ul = document.querySelector("ul");
  var length = ul.children.length + 1;
  if (length <= 10) {
    var li = document.createElement("li");
    li.innerText = "List " + length;
    ul.appendChild(li);
  } else {
    alert("limit tugadi");
  }
});

document.querySelector("#removeBtn").addEventListener("click", function () {
  var ul = document.querySelector("ul");
  var length = ul.children.length + 1;
  var childs = ul.children;
  if (length > 0) {
    ul.removeChild(childs[childs.length - 1]);
  } else {
    alert("limit tugadi");
  }
});

document.querySelector("#tozalash").addEventListener("click", function () {
  var ul = document.querySelector("ul");
  ul.innerHTML = "";
});

// document.querySelector("input").addEventListener("change", function(){

// })
// function sum(a, b) {
//   var c = a + b;
//   document.getElementById("box").innerText = c;
// }

// sum(3, 5);

// document.querySelector("#addBtn").addEventListener("click", function () {
//   var ul = document.querySelector("ul");

//   var length = ul.children.length + 1;
//   if (length < 11) {
//     var li = document.createElement("li");
//     li.innerText = "List " + length;
//     ul.appendChild(li);
//   } else {
//     alert("stop");
//   }
// });

// document.querySelector("#removeBtn").addEventListener("click", function () {
//   var ul = document.querySelector("ul");
//   var length = ul.children.length + 1;
//   var li = document.createElement("li");
//   var childs = ul.children;
//   ul.removeChild(childs[childs.length - 1]);
// });

// document.querySelector("#tozalash").addEventListener("click", function () {
//   var ul = document.querySelector("ul");
//   ul.innerHTML = "";
// });

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => console.log(res))
//   .catch((res) => console.log(error));

// var container = document.querySelector(".container");
// movies.map(function (item) {
//   var movieDiv = document.createElement("div");

//   movieDiv.classList.add("movie");
//   var img = document.createElement("img");
//   img.src = item.posterurl;
//   img.alt = "Error img";
//   var bodyDiv = document.createElement("div");
//   bodyDiv.classList.add("body");
//   var h3 = document.createElement("h3");
//   var a = document.createElement("a");
//   a.href = "#";
//   a.innerText = item.title;
//   var p1 = document.createElement("p");
//   p1.innerText = item.releaseDate;
//   var p2 = document.createElement("p");
//   p2.innerText = item.genres;

//   h3.appendChild(a);
//   bodyDiv.appendChild(h3);
//   bodyDiv.appendChild(p1);
//   bodyDiv.appendChild(p2);
//   movieDiv.appendChild(img);
//   movieDiv.appendChild(bodyDiv);
//   container.appendChild(movieDiv);
// });

// function sum(a, b) {
//   var c = a + b;

//   document.getElementById("box").innerText = c;
// }
// sum(3, 5);


