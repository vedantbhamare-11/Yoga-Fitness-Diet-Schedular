//listen for auth status changes
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("user signed in", user);
  } else {
    console.log("user signed out");
  }
});
//sign up
const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //getting user input
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;

  //signup the user
  auth.createUserWithEmailAndPassword(email, password).then((cred) => {
    console.log(cred);
  });
});

//login
const signinForm = document.querySelector("#signin-form");
signinForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //get user info
  const email = signinForm["signin-email"].value;
  const password = signinForm["signin-password"].value;

  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    console.log(cred.user);
  });
});
