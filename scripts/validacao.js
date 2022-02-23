const form = document.querySelector("#form");
const iEmail = document.getElementById("email");


form.addEventListener("submit", (event) => {
   event.stopPropagation();
  console.log("iEmail")
  console.log("form")
  if (iEmail.value.length == "" ){
    alert("Digite um endereço de e-mail valido!"); 
      } else {
    alert("Formulário Enviado");
      }
});