const LOGIN = "ADMIN";
const PASSWORD = "1q2w3e";

const authorize = () => {
  let userPassword;
  let userLogin;

  let i = 0;
  let y = 3;

  do {
    userLogin = prompt("Логин:");
    if (!userLogin) {
      alert("Введите логин");
      continue;
    }

    userPassword = prompt("Пароль:");
    if (!userPassword) {
      alert("Введите пароль");
      continue;
    }

    if (userPassword === PASSWORD || userLogin === LOGIN) {
      i = 6;
    } else {
      alert("Данные неверны!");
      i++
      y = (3-i);
      alert ("у вас осталось " + y + " попыток");
    }
  } while (i < 3);

  if (i == 3){
    alert ("у вас закончелись попытки")
  } else{
    alert ("Welcome")
  }
  
};
authorize();