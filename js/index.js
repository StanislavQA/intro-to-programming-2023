var today = new Date();
var thisYear = today.getFullYear();
var footer = document.querySelector("footer");
var copyright = document.createElement("p");
copyright.innerHTML = "Stan White " + thisYear;
footer.appendChild(copyright);

var skills = [
  "Proficiency in JavaScript",
  "Mastery of HTML, CSS",
  "In-depth knowledge of front-end frameworks/libraries",
  "Familiarity with databases like MySQL, PostgreSQL",
  "Expertise in using version control systems, especially Git",
  "Strong problem-solving skills",
  "Advanced understanding of fundamental algorithms and data structures",
];
var skillsSection = document.querySelector("#skills");
var skillsList = skillsSection.querySelector("ul");
for (let index = 0; index < skills.length; index++) {
  var skill = document.createElement("li");
  skill.innerText = skills[index];
  skillsList.appendChild(skill);
}
