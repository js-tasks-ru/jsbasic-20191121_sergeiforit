/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */

function pow(x, n) {
  let showResult = x;

  for (let i = 1; i < n; i++) {
    showResult *= x;
  }

  return showResult;
}
let x = prompt('Введите целое число?', '');
let n = prompt('Введите степень?', '');

if (n < 1) {
  alert('Степень ${n} некорректна. Введите целое число');
} else {
  alert(pow(x, n));
}
