const LOGIN = "ADMIN";
const PASSWORD = "1q2w3e";

const authorize = () => {
    let userPassword;
    let userLogin;
    let isAuthSuccess = false;
    do {
        userLogin = prompt("Логин:");
        if(!userLogin) {
            alert ("Введите логин");
            continue
        }

        userPassword = prompt("Пароль");
        if(!userPassword) {
            alert("Введите пароль");
            continue;
        }

        if (userPassword === PASSWORD || userLogin === LOGIN){
            isAuthSuccess = true;
        } else {
            alert ("Данные неверны!")
        }

    } while (isAuthSuccess);
    alert("Welcome")
};

authorize();