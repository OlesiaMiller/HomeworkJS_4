
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



// 2


var myDate = new Date();
function getLocalDate(date, isSeconds = false, isISO = false) {
  var reg = new RegExp(':\\d{2}$', 'gui');
  var res;

  if (!isISO) res = isSeconds
  ? date.toLocaleString()
  : date.toLocaleString().replace(reg, '');
else {
  var year = date.getFullYear();
  var month =
    date.getMonth() + 1 < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  var day = date.getDate() < 9 ? `0${date.getDate()}` : date.getDate();
  var hour = date.getHours() < 9 ? `0${date.getHours()}` : date.getHours();
  var minutes =
    date.getMinutes() < 9 ? `0${date.getMinutes()}` : date.getMinutes();
  var seconds =
    date.getSeconds() < 9 ? `0${date.getSeconds()}` : date.getSeconds();

  res = isSeconds
    ? `${year}-${month}-${day}, ${hour}:${minutes}:${seconds}`
    : `${year}-${month}-${day}, ${hour}:${minutes}`;
}

return res;
};




console.log(getLocalDate(myDate)); // 16.07.2019, 00:15
console.log(getLocalDate(myDate, true)); // 16.07.2019, 00:15:32
console.log(getLocalDate(myDate, false, true)); // 2019-06-02, 00:15
console.log(getLocalDate(myDate, true, true)); // 2019-06-02, 00:15:32
console.log(getLocalDate(new Date(123456)));
console.log(getLocalDate(new Date(123456), true));
console.log(getLocalDate(new Date(123456), false, true));
console.log(getLocalDate(new Date(123456), true, true));

// 3

function getWeekDay(date) {
    var dat = new Date(date);
    var days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
      return days[dat.getDay()];
  }
  
console.log(getWeekDay('2019-01-30')); // среда
console.log(getWeekDay('2019-07-16')); // вторник
console.log(getWeekDay('2019-07-27')); // суббота

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

// 6
var yearNow = yearNow = new Date().getFullYear();

var Car = function(engine, model, name, year) {
  this.engine = engine;
  this.model = model;
  this.name = name;
  this.year = year;
};
Object.defineProperties(Car.prototype, {
  used: {
    get() {
      return yearNow - this.year > 1 ? 'used' : 'new';
    },

  set (value) {
    if (value === 'new' && this.year < yearNow) this.year = yearNow;
    }
  }
});


  Car.prototype.info = function() {
    return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
  }
  var car = new Car(2000, 'Lacetti', 'Chevrolet', 2010);
  var car2 = new Car(5000, 'FX50 AWD', 'Infinite', 2019);

console.log(car.info()); // chevrolet Lacetti, 2010cc, year 2010, used
car.used = 'new';
console.log(car.info()); // chevrolet Lacetti, 2019cc, year 2019, new -- год изменен
car.used = 'used';
console.log(car.info()); // chevrolet Lacetti, 2019cc, year 2019, new -- изменения не выполняются
console.log(car2.info()); // infinite FX50 AWD, 2019cc, year 2019, new
car.used = 'used';
console.log(car2.info()); // infinite FX50 AWD, 2019cc, year 2019, new -- изменения не выполняются

// 7
function testPerformance(iterations, func) {
    var d = Date.now();
    if (typeof func === 'function') 
        for (var i = 0; i<= iterations; ++i) func();
        return Date.now() - d;

};

function test1() {
  var str = myLongStr;

  while (str.indexOf('o') !== -1) str = str.replace('o', '');
  while (str.indexOf('a') !== -1) str = str.replace('a', '');
  while (str.indexOf('e') !== -1) str = str.replace('e', '');
  while (str.indexOf('u') !== -1) str = str.replace('u', '');
  while (str.indexOf('i') !== -1) str = str.replace('i', '');
}

function test2() {
  var reg = new RegExp('[oaeui]', 'gui');
  myLongStr.replace(reg, '');
}
console.log(testPerformance(100, test1)); // time
console.log(testPerformance(100, test2)); // time
console.log(testPerformance(100, 12345)); // 0




