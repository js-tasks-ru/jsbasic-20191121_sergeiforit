//'use strict'
/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/* Допишите функцию валидации имени пользователя
Необходимо, чтобы на сайте можно было поприветствовать только пользователей, которые удовлетворяют следующему условию – имя не пустое, без пробелов, минимум 4 символа. */

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */

function isValid(name) {
  if (name == null || name == '' || name.length < 4 || name.indexOf(' ') !== -1) {
    return false;
  } else {
    return true;
  }
}

function sayHello() {
  const userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}