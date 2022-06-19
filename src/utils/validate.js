export function validateEmail(email) {
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (email.length === 0) {
    return "Email не может быть пустым";
  } else if (!reg.test(String(email).toLowerCase())) {
    return "Email не корректный";
  } else {
    return "";
  }
}

export function validateName(name) {
  const reg = /^[а-яёa-z- ]+$/iu;
  if (name.length === 0) {
    return "Имя не может быть пустым";
  } else if (name.length < 2 || name.length > 30) {
    return "Имя должно содержать от 2 до 30 символов";
  } else if (!reg.test(String(name).toLowerCase())) {
    return "Имя может содержать латиницу, кирилицу, пробел и дефис";
  } else {
    return "";
  }
}

export function validatePassword(password) {
  const reg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  if (password.length === 0) {
    return "Пароль не может быть пустым";
  } else if (!reg.test(String(password).toLowerCase())) {
    return "Пароль должен содержать хотя бы одну цифру, заглавную букву и специальный символ. Количество символов от 6 до 16.";
  } else {
    return "";
  }
}