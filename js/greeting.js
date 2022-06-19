const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input:first-child");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME); 
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  // # 4.5 saving username
  // localStorage enables you to 
  // keep values that you input (setItem)
  // even if refreshing usually clears the record out
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
// Once you submit the form, the form disappears, and 
// the h1 tag appears becasue of removing hidden class.
// for onLoginSubmit

// # 4.6 Loading Username
// compile first from here.
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  // No username saved in storage
  // Form appears - Then, when you click, work as usual
} else {
  paintGreetings(savedUsername);
  // only h1 tag out there.
}

// trying for myself to code this stuff above

// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const greetings = document.querySelector("#greetings");

// const HIDDEN_CLASSNAME = "hidden";
// const USERNAME_KEY = "username";
// function handleOnSubmit(event) {
//     event.preventDefault();
//     loginForm.classList.add(HIDDEN_CLASSNAME);
//     const userName = loginForm.value;
//     localStorage.setItem(USERNAME_KEY, userName);
//     paintGreetings(userName);
// }

// function paintGreetings(username) {
//     greetings.classList.remove(HIDDEN_CLASSNAME);
//     greetings.innerText = `Hello, ${username}`
// }

// const savedUserName = localStorage.getItem(USERNAME_KEY);

// if (savedUserName === null) {
//     loginForm.classList.remove(HIDDEN_CLASSNAME);
//     loginForm.addEventListener("submit", handleOnSubmit);
// } else {
//     paintGreetings(savedUserName);
// }