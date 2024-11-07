const Username = document.getElementById('username')
const Password = document.getElementById('password')
const ButtonLogin = document.getElementById('Login')
const Bienvenida = document.getElementById('Bienvenida')
const Contenedor = document.getElementById('contenedor')
const ErrorCredenciales = document.getElementById('ErrorCredenciales')


Bienvenida.style['display'] = 'none'

const GetDataLogin = () => {
    console.log(Username.value)
    console.log(Password.value)

    if (Username.value === 'admin' && Password.value === 'pass') {
        ErrorCredenciales.setAttribute("hidden", true)
        Bienvenida.style['display'] = 'flex'
        Contenedor.style['display'] = 'none'
    } else { ErrorCredenciales.removeAttribute("hidden") }

}

ButtonLogin.addEventListener('click', GetDataLogin)