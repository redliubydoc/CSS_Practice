const URL_PROTECTED = "http://localhost:9090/private/test";

LoginService = {
  doLogin: function(username, password) {

    const basicAuthNToken = btoa(`${username}:${password}`);
    
    return fetch(URL_PROTECTED, {
      method:"get", 
      headers: {
        "Authorization": `Basic ${basicAuthNToken}`
      }
    });
  }
};
