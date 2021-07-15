// Задание 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100

// let n = 100;
// let i = 2;
// nextPrime:
// while (i <= n) {
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             i++;
//             continue nextPrime;
//         }
//     }
//     console.log(i);
//     i++
// }

// Задание 2 - 3. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.Товары в корзине хранятся в массиве.
//     a) Организовать такой массив для хранения товаров в корзине;
//     b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

// let arrProducts = [
//     ['apple', 77, 5],
//     ['mango', 155, 3],
//     ['milk', 45, 1],
//     ['cofe', 300, 2],
//     ['meat', 550, 3.5]
// ]

// let sumPrice = 0;

// function countBasketPrice() {
//     for (let i = 0; i < arrProducts.length; i++) {
//         sumPrice += arrProducts[i][1] * arrProducts[i][2];
//     }
//     return sumPrice;
// }

// console.log('Стоимость Вашей карзины: ', countBasketPrice(arrProducts));

// Задача 4. Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.

// for (let i = 0; i < 10; console.log(i++)) {
// };

// Задача 5. Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

// for (let i = 1; i <= 20; i++) {
//     console.log('*'.repeat(i))
// };
