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

  LoginService.doLogin(username, password)
    .then(function(response) {
      if (response.status == 200) {
        response.json()
          .then(function(data) {
            document.body.innerText = JSON.stringify(data);
          }).catch(function(e) {console.log(e);});
      }
    }).catch(function(e) {console.log(e);});
});
