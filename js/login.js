document.getElementById("ingresar").onclick = function() {


    var username = document.getElementById('usuario').value;
    var clave = document.getElementById('password').value;


    var urllogin = 'https://ServidorTest.carlos-reneren7.repl.co/login';
    var data = {user: username, password: clave};
    
    if(data.user === localStorage.getItem("user") && 
    data.password === localStorage.getItem("password"))
        {
      window.location.href="html/dashboard.html";
      console.log('Bienvenido: ', data.user);
    }else { 
        console.log('Usuario no registrado');
        document.getElementById("form1").reset();
    }
}