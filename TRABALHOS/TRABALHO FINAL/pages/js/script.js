//Direcionamento de links
const fgPasswordPage = '/pages/fgPassword.html';
const cadastroPage = '/pages/cadastroPage.html';

//Redirecionamento para página de recuperação de senha
const fgPasswordBtn = document.getElementById('fgPassword');

fgPasswordBtn.addEventListener('click', () =>{
  window.location.href = fgPasswordPage;
})

//Redirecionamento para a página de cadastro de usuário 
const signUpBtn = document.getElementById('signUpBtn')

signUpBtn.addEventListener('click', () => {
  window.location.href = cadastroPage;
})

//Animações
const registerBtn = document.getElementById('register');
const container = document.getElementById('container');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () =>{
  container.classList.add("active");
});

loginBtn.addEventListener('click', () =>{
  container.classList.remove("active");
})

//Validação do email para sign in 
const fieldUser = document.getElementById('userInput');
const fieldPasswordSignIn = document.getElementById('passwordInputSignIn');
const formLogin = document.getElementById('form-login-sign-in');
const invalidUserField = document.querySelector('#WrongUser');
const signInBtn = document.getElementById('signInBtn');

const user = {
  'login' : 'admin',
  'password': 'admin1212@!'
};

function resetForm(){
  formLogin.reset();
}

function userIsAuthenticated(){
  return user.login === userInput.value && user.password === fieldPasswordSignIn.value;
}

async function login(){
  if(userIsAuthenticated()){
    localStorage.setItem('user', user.login)
    resetForm()
    window.location.href = 'pages/fgPassword.html'
  } else{
    localStorage.removeItem('user')
    resetForm()
    fieldUser.style.border = '1.3px solid rgb(233, 1, 1)';
    fieldPasswordSignIn.style.border = '1.3px solid rgb(233, 1, 1)';
    invalidUserField.innerHTML = 'Usuário/Senha inválidos!';
    invalidUserField.style.color = 'rgb(233, 1, 1)';
    fieldUser.classList.add('invalid');
    fieldPasswordSignIn.classList.add('invalid');
  }
}

signInBtn.addEventListener('click', (e) => {
  e.preventDefault()
  login()
})

//Adicionando ver Senha 
const eyePassword = document.getElementById('btn-senha');
const passwordInputSignUp = document.getElementById('passwordInputSignUp');

eyePassword.addEventListener('click', () => {
  if (passwordInputSignUp.type === 'password') {
    passwordInputSignUp.setAttribute('type', 'text');
    eyePassword.classList.replace('bi-eye', 'bi-eye-slash');
  } else {
    passwordInputSignUp.setAttribute('type', 'password');
    eyePassword.classList.replace('bi-eye-slash', 'bi-eye');
  }
});

const eyePasswordIn = document.getElementById('btn-senha-in');
const passwordInputSignIn = document.getElementById('passwordInputSignIn');

eyePasswordIn.addEventListener('click', () => {
  if (passwordInputSignIn.type === 'password') {
    passwordInputSignIn.setAttribute('type', 'text');
    eyePasswordIn.classList.replace('bi-eye', 'bi-eye-slash');
  } else {
    passwordInputSignIn.setAttribute('type', 'password');
    eyePasswordIn.classList.replace('bi-eye-slash', 'bi-eye');
  }
});


