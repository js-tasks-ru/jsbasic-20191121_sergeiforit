/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */



function clone (obj) {
  let copy = {}; // создаем новый пустой объект
  for (const key in obj) { // перебираем объект
    if ( typeof (obj[key] ) === 'object' && (obj[key]) !== null) { // второе условие для корректной обработки typeof null === 'object'
      copy[key] = clone(obj[key]); // рекурсия для вложенных объектов
    } else {
      copy[key] = obj[key]; // копируем обычные ключ-значения объекта
    }
  }
  return copy;
}