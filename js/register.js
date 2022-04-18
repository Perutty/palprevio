function singUp(e)
{
    event.preventDefault();

var username = document.getElementById('username').value;
var clave = document.getElementById('pass').value;
var nombre = document.getElementById('name').value;
var correo = document.getElementById('email').value;

var urllogin = 'https://servidortest.carlos-reneren7.repl.co/register';
var data = {user: username, password: clave, name: nombre, email: correo};

fetch(urllogin, {
     method: 'POST', 
     body: JSON.stringify(data),
     headers: {
         'Content-Type': 'application/json'
     }
    }).then(res => res.json())
    .then(json=>console.log(data))
    localStorage.setItem("usuario", JSON.stringify(data));
    document.getElementById("form2").reset();
}