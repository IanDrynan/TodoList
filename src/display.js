const main = document.querySelector("#main");
const mainBtns = document.querySelector("#mainBtns");

const display = (project) => {
  const inboxDiv = document.createElement("div");
  inboxDiv.id = "inbox";
  main.insertBefore(inboxDiv, mainBtns);
  console.log(project.todos);
};

export { display };
