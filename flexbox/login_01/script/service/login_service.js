const URL_PROTECTED = "http://localhost:9090/test";

LoginService = {
  doLogin: function(username, password) {

    const basicAuthNToken = btoa(`${username}:${password}`);
    
    console.log(basicAuthNToken);

    return fetch(URL_PROTECTED, {
      method:"get", 
      headers: {
        "Authorization": `Basic ${basicAuthNToken}`
      }
    });
  }
};