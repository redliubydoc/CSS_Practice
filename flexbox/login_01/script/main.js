const inputUsername = document.querySelector("#ip-username");
const inputPassword = document.querySelector("#ip-password");
const buttonLogin = document.querySelector("#btn-login");

buttonLogin.addEventListener("click", function(e) {

  e.preventDefault();

  const username = inputUsername.value;
  const password = inputPassword.value;

  if (!username || !password) {
    console.log("username and password cannot be empty.");
    return false;
  }

  console.log(username, password);

  LoginService.doLogin(username, password)
    .then(function (response) {
      console.log(response.status);
    })
    .catch(function (e) { 
      console.log(e);
    });
});
