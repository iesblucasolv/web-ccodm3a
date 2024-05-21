document.getElementById("#root");


function createTitle(nome){
  const h1 = document.createElement("h1");
  h1.innerText = nome;
  return h1;
}


function createHeader(){
  const header = document.createElement("header");
  header.setAttribute("class", ".styleHeader");
  header.append(createTitle("Login"));
  return header;
}


function createForm(){
  const form = document.createElement("form");


  const inputEmail = document.createElement("input");
  inputEmail.setAttribute("type", "email");
  inputEmail.setAttribute("name", "email");
  inputEmail.setAttribute("placeholder", "Email");
  inputEmail.setAttribute("required", true);


  const inputPassword = document.createElement("input");
  inputPassword.setAttribute("type", "password");
  inputPassword.setAttribute("name", "senha");
  inputPassword.setAttribute("placeholder", "Senha");
  inputPassword.setAttribute("required", true);


  const inputSubmit = document.createElement("input");
  inputSubmit.setAttribute("id", "login");
  inputSubmit.setAttribute("type", "submit");
  inputSubmit.setAttribute("value", "Entrar");
  inputSubmit.addEventListener("click", login);


  form.append(inputEmail);
  form.append(inputPassword);
  form.append(inputSubmit);


  return form;
}


function login(event){
  event.preventDefault();


  const inputEmail = document.querySelector('input[type="email"]');


  if(!inputEmail.value){
    const error = document.createElement("p");
    error.innerText = "Email é obrigatório";
    inputEmail.parentElement.appendChild(error);
    inputEmail.focus();
  }


  const inputPassword = document.querySelector('input[type="email"]');
 
  fetch.post("/user/login", {
    method: "POST",
    body: {
      email: inputEmail.value,
      password: inputPassword.value
    }
  })
}


function main(){
  const main = document.createElement("main");
  main.append(createForm());
 
  return main;
}


root.append(createHeader());
root.append(main());