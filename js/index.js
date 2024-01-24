const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector("footer");
const copyright = document.createElement("p");

//Set footer html value with current year
copyright.innerHTML = `Stan White &#169; ${thisYear}`;
footer.appendChild(copyright);

const skills = [
  "Proficiency in JavaScript",
  "Mastery of HTML, CSS",
  "In-depth knowledge of front-end frameworks/libraries",
  "Familiarity with databases like MySQL, PostgreSQL",
  "Expertise in using version control systems, especially Git",
  "Strong problem-solving skills",
  "Advanced understanding of fundamental algorithms and data structures",
];
const skillsSection = document.querySelector("#skills");

var skillsList = skillsSection.querySelector("ul");

//For each skill in skills array, create li html element containing and append to list
for (let index = 0; index < skills.length; index++) {
  var skill = document.createElement("li");
  skill.innerText = skills[index];
  skillsList.appendChild(skill);
}

var messageForm = document.forms["leave_message"];
messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  var userNameTyped = messageForm.elements.usersName.value;
  var userEmailTyped = messageForm.elements.usersEmail.value;
  var userMessageTyped = messageForm.elements.usersMessage.value;
  console.log(userNameTyped, userEmailTyped, userMessageTyped);

  // Create a new list item
  var messageSection = document.querySelector("#messages");
  var messageList = messageSection.querySelector("ul");
  var newMessage = document.createElement("li");
  messageSection.style.display = "none";
  newMessage.innerHTML =
    '<a href="mailto:' +
    userEmailTyped +
    '">' +
    userNameTyped +
    "</a> <span>" +
    userMessageTyped +
    "</span>";

  // Create "Edit" and "Remove" buttons
  var editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.className = "btnEdit";
  var removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.className = "btnRemove";

  // Append buttons to the new message
  newMessage.appendChild(editButton);
  newMessage.appendChild(removeButton);

  // Append the new message to the list
  messageList.appendChild(newMessage);

  // Show or hide the message section based on the list length
  messageSection.style.display =
    messageList.children.length === 0 ? "none" : "block";

  // Reset the form
  messageForm.reset();

  // Add event listener for "Edit" button
  editButton.addEventListener("click", () => {
    // Prompt the user for a new message
    var newMessageText = prompt("Enter a new message:", userMessageTyped);

    // Update the message if the user entered something
    if (newMessageText !== null) {
      newMessage.querySelector("span").textContent = newMessageText;
    }
  });

  // Add event listener for "Remove" button
  removeButton.addEventListener("click", () => {
    messageList.removeChild(newMessage);

    // Hide the message section if the list is empty
    messageSection.style.display =
      messageList.children.length === 0 ? "none" : "block";
  });
});

fetch("https://api.github.com/users/StanislavQA/repos")
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    var projectSection = document.querySelector("#projects"); // "projects" is an ID
    var projectList = projectSection.querySelector("ul");

    for (var i = 0; i < response.length; i++) {
      var project = document.createElement("li");
      var url = response[i].html_url;
      var description = response[i].description || "No description available";

      // TextContent for the description
      project.textContent = description + "\n";

      // Creating a line break element after the description
      var lineBreak = document.createElement("br");
      project.appendChild(lineBreak);

      // Creating a link element for the project name
      var projectLink = document.createElement("a");
      projectLink.href = url;
      projectLink.target = "_blank";
      projectLink.textContent = response[i].name;

      // Append the link to the project list item
      project.appendChild(projectLink);

      // Append the project list item to the project list
      projectList.appendChild(project);
    }
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
