
let bruger = {
    brugernavn: "IBL",
    alder: 22,
    profession: "Murermester",
    citat: "gg",
    hold: ["Real Madrid", "Tottenham", "BIF"],
    spil: {
        navn: "Cod",
        type: "ringe"
    }
}
 
//opgave 1
 
console.log("opgave 1", bruger.brugernavn)
console.log("opgave 1", bruger.alder)
console.log("opgave 1", bruger.profession)
console.log("opgave 1", bruger.citat)
 
 
console.log("opgave 1a", bruger["brugernavn"])
console.log("opgave 1a", bruger["alder"])
console.log("opgave 1a", bruger["profession"])
console.log("opgave 1a", bruger["citat"])

 
//opgave 2
 
let iterator = Object.values(bruger);
 
for (let value of iterator) {
  console.log("opgave 2", value);
}
 
 
//opgave 3
 
let students = [
    { name: "Sofie", age: 25, course: "Webudvikler"},
    { name: "Emil", age: 28, course: "Teknisk Designer"},
    { name: "Lukas", age: 22, course: "Mediegrafiker"},
];
 
let studentListDiv = document.querySelector(".bro");
 
students.forEach(student => {
    let studentDiv = document.createElement("div");
    studentDiv.classList.add("student")
    let studentHeadline = document.createElement("h2")
    studentHeadline.textContent = student.name;
    let studentInfo = document.createElement("p")
    studentInfo.textContent =
    `Alder: ${student.age}, Uddannelse: ${student.course}`;
    studentDiv.append(studentHeadline, studentInfo);
    studentListDiv.appendChild(studentDiv);
});