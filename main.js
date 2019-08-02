
/* eslint-disable multiline-comment-style */


// 1

let myLongStr = '? ? ?Lorem lorem lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore nemo quod molestiae dolor, assumenda ab nobis, sequi facere ipsum, repellendus ullam totam iste officia. Facere quaerat vero dolorum rem placeat exercitationem, nostrum ipsum hic doloribus itaque asperiores maiores beatae id quos fugiat fugit tempore voluptates quod commodi doloremque mollitia. Harum alias aliquid obcaecati velit eligendi debitis ex vel nisi ut placeat, dolores qui quasi? Repellendus soluta voluptates id iusto, similique dolorum, maiores molestias impedit ipsam quod quae minus doloribus repellat ipsum modi pariatur labore quisquam adipisci, debitis asperiores dolores quo ullam eos cupiditate? Voluptate nam totam, aspernatur molestias est deserunt.'


function wordsList(str, subStr) {
    var reg = new RegExp('\\.|,|\\?|!|:|;|"', 'gui');
    var strArr = str.
        toLowerCase().
        replace(reg,'').
        split(' ').
        filter((element) => element.indexOf(subStr) > -1);
        
    var set = new Set ();
    strArr.forEach((element) => {
        set.add(element);
    });

    return set;

};

console.log(wordsList(myLongStr, 'lor'));





/*
 * #2
 *
 * Создайте функцию getLocalDate(date, isSeconds, isISO), которая будет принимать любую
 * дату от конструктора new Date и преобразовывать ее в следующие форматы в зависимости от параметров:
 * getLocalDate(date) → dd.mm.yyyy, hh:mm, например: 16.07.2019, 00:15
 * getLocalDate(date, true) → dd.mm.yyyy, hh:mm, например: 16.07.2019, 00:15:32
 * getLocalDate(date, false, true) → dd.mm.yyyy, hh:mm, например: 2019-06-02, 00:15
 * getLocalDate(date, true, true) → dd.mm.yyyy, hh:mm, например: 2019-06-02, 00:15:32
 * date – любая дата из конструктора new Date().
 * isSeconds – опциональный параметр для отображения секунд в дате.
 * isISO – опциональный параметр переключения формата даты.
 */

// let myDate = new Date();

// console.log(getLocalDate(myDate)); // 16.07.2019, 00:15

// console.log(getLocalDate(myDate, true)); // 16.07.2019, 00:15:32

// console.log(getLocalDate(myDate, false, true)); // 2019-06-02, 00:15

// console.log(getLocalDate(myDate, true, true)); // 2019-06-02, 00:15:32

// console.log(getLocalDate(new Date(123456)));

// console.log(getLocalDate(new Date(123456), true));

// console.log(getLocalDate(new Date(123456), false, true));

// console.log(getLocalDate(new Date(123456), true, true));

/*
 * #3
 *
 * Создайте функцию getWeekDay(date), которая принимает дату в виде строки в формате 'yyyy-mm-dd'
 * и выводит текущий день недели: "понедельник", "вторник", … "воскресенье".
 */

// console.log(getWeekDay('2019-01-30')); // среда

// console.log(getWeekDay('2019-07-16')); // вторник

// console.log(getWeekDay('2019-07-27')); // суббота

// 4

function getLocalDay(date) {
    var day = new Date(date);
    num = day.getDay();

    if (num === 0) num = 7;     
    return num;

}


console.log(getLocalDay('2019-07-16')); // 2
console.log(getLocalDay('2019-07-25')); // 4
console.log(getLocalDay('2019-07-27')); // 6
console.log(getLocalDay('2019-08-02'));
console.log(getLocalDay('2019-08-04'));



// 5

function getDateAgo(date, days) {
    var dat = new Date(date);
    dat.setDate(dat.getDate() - days);

    var dd = dat.getDate();
    if (dd < 10) dd = '0' + dd;
  
    var mm = dat.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
  
    var yy = dat.getFullYear();
  
    return dd + '.' + mm + '.' + yy;
  }

console.log(getDateAgo('2019-01-29', 1)); // 28.01.2019
console.log(getDateAgo('2019-01-29', 2)); // 27.01.2019
console.log(getDateAgo('2019-01-29', 365)); // 29.01.2018

/*
 * #6
 *
 * Используя в качестве основы, объект car, описанный в прошлом занятии, создайте прототип Car,
 * реализующий те же поля (#17.4) и методы(#17.5 и #17.6) у создаваемых объектов.
 *
 * Например:
 * let car = new Car(2000, 'Lacetti', 'Chevrolet', 2010);
 * let car2 = new Car(5000, 'FX50 AWD', 'Infinite', 2019);
 *
 * Способ создания прототипа не регламентирован.
 * Объекты и их методы, созданные прототипом должны полностью соответствовать объектам из прошлого задания.
 */

// let car = new Car(2000, 'Lacetti', 'Chevrolet', 2010);

// let car2 = new Car(5000, 'FX50 AWD', 'Infinite', 2019);

// console.log(car.info()); // chevrolet Lacetti, 2010cc, year 2010, used

// car.used = 'new';

// console.log(car.info()); // chevrolet Lacetti, 2019cc, year 2019, new -- год изменен

// car.used = 'used';

// console.log(car.info()); // chevrolet Lacetti, 2019cc, year 2019, new -- изменения не выполняются

// console.log(car2.info()); // infinite FX50 AWD, 2019cc, year 2019, new

// car.used = 'used';

// console.log(car2.info()); // infinite FX50 AWD, 2019cc, year 2019, new -- изменения не выполняются

/*
 * #7
 * Напишите функцию testPerformance(iterations, func) для тестирования производительности любых, переданных ей в качестве параметра функций.
 * iterations – количество повторений для тестирования.
 * func – тестируемая функция.
 *
 * Если в качестве параметра передается что-либо кроме функции, тестирование не выполняется, возвращается 0.
 */

// данная функция необходима для корректного тестирования кода
// function test1() {
//   let str = myLongStr;

//   while (str.indexOf('o') !== -1) str = str.replace('o', '');
//   while (str.indexOf('a') !== -1) str = str.replace('a', '');
//   while (str.indexOf('e') !== -1) str = str.replace('e', '');
//   while (str.indexOf('u') !== -1) str = str.replace('u', '');
//   while (str.indexOf('i') !== -1) str = str.replace('i', '');
// }

// данная функция необходима для корректного тестирования кода
// function test2() {
//   const reg = new RegExp('[oaeui]', 'gui');

//   myLongStr.replace(reg, '');
// }

// console.log(testPerformance(100, test1)); // time

// console.log(testPerformance(100, test2)); // time

// console.log(testPerformance(100, 12345)); // 0