// list = [];
// dict = {};
// const data = [
//   { id: "1", ismi: "Asqar", yoshi: "22" },
//   { id: "1", ismi: "Jasur", yoshi: "22" },
//   { id: "1", ismi: "Davlatmurot", yoshi: "22" },
//   { id: "1", ismi: "Asqar", yoshi: "22" },
// ];

// console.log(data);

// var container = document.querySelector(".container");
// data.map(function (item) {
//   var p = document.createElement("p");
//   p.innerText = item.ismi;
//   var p2 = document.createElement("p");
//   p2.innerText = item.yoshi;
//   container.appendChild(p);
//   container.appendChild(p2);
// });




document.querySelector("input").addEventListener("keyup", function () {
  var a = document.querySelector("input").value;
  document.getElementById("p").innerText = a;
  document.querySelector("#p2").innerText = "uzunligi " + a.length + " ta";
});
