console.log('Sample JavaScript #3 HW #17');

/*
 * #1
 *
 * Создайте функцию counter(), которая должна реализовать счетчик с помощью замыкания:
 * функция может принимать число в качестве аргумента counter(n)
 * если число передано в функцию – счет начинается с указанного числа
 * если нет – то счет продолжается
 */

// console.log(counter()); // 0

// console.log(counter()); // 1

// console.log(counter(100)); // 100

// console.log(counter()); // 101

// console.log(counter(500)); // 500

// console.log(counter()); // 501

// console.log(counter(0)); // 0

// console.log(counter()); // 1
var counter = (function () {
    var i = 0;
    return function (n) {
        if (typeof n !== 'undefined') i = n
        return i++;
    }
}())
console.log(counter());
console.log(counter());
console.log(counter(100));
console.log(counter());
console.log(counter(500));
console.log(counter());
console.log(counter(0));
console.log(counter());

/*
 * #2
 *
 * Создайте функцию counting, которая должна реализовать три метода с помощью замыкания:
 * первоначальное значение счетчика – 0
 * counting.value() – возвращает значение счетчика
 * counting.value(n) – устанавливает значение счетчика, возвращает новое значение
 * counting.increment() – увеличивает значение счетчика на 1
 * counting.decrement() – уменьшает значение счетчика на 1
 */

// console.log(counting.value()); // 0

// counting.increment();

// counting.increment();

// counting.increment();

// console.log(counting.value()); // 3

// counting.decrement();

// counting.decrement();

// console.log(counting.value()); // 1

// console.log(counting.value(100)); // 100

// counting.decrement();

// console.log(counting.value()); // 99

// console.log(counting.value(200)); // 200

// counting.increment();

// console.log(counting.value()); // 201
var counting = (function () {
    var i = 0;
    return {
        value(n) {
            if (typeof n !== 'undefined') i = n
            return i;
        },
        increment() {
            i++;
        },
        decrement() {
            i--;
        }
    };
}());
console.log(counting.value());
counting.increment();
counting.increment();
counting.increment();
console.log(counting.value());
counting.decrement();
counting.decrement();
console.log(counting.value());
console.log(counting.value(100));
counting.decrement();
console.log(counting.value());
console.log(counting.value(200));
counting.increment();
console.log(counting.value());

/*
 * #3
 *
 * Создайте функцию myPow(a, b, myPrint). Внутри реализуйте рекурсию для подсчета результата возведения числа a в степень b.
 * функция myPrint(a, b, res) – глобальная функция, которая должна генерировать из параметров a, b, res строку вида 'a^b=res' и возвращать ее
 * myPrint() должна быть передана в myPow() как параметр и вызвана внутри как callback-функция
 * функция myPow() в качестве возвращаемого значения принимает результат myPrint()
 * Например:
 * console.log(myPow(3, 4, myPrint)); // 3^4=81
 * console.log(myPow(2, 3, myPrint)); // 2^3=8
 */
var myPrint = function (a, b, res) {
    return `${a}^${b}=${res}`;
}
var myPow = function (a, b, myPrint) {
    function pow(a, b) {
        if (b !== 1) {
            return a *= pow(a, b - 1);
        } else {
            return a;
        }
    }

    return myPrint(a, b, pow(a, b));
}
console.log(myPow(3, 4, myPrint)); // 3^4=81
console.log(myPow(2, 3, myPrint)); // 2^3=8
/*
 * #4
 *
 * Создайте несколько однотипных объектов для описания автомобиля. Соблюдайте следующие правила, используйте следующие поля:
 * имя объекта car – обязательно и необходимое для тестирования, дальнейшее именование объектов – на ваше усмотрение
 * car.engine – объем двигателя, числовое поле
 * car.model – модель авто, строка
 * car.name – бренд авто, строка
 * car.year – год выпуска, число
 * car.used – строка для описания состояния авто, допускаются значения 'used' и 'new'
*/
var info = function () {
    return this.name + ' ' + this.model + ', ' + this.engine + 'cc, year ' + this.year + ', ' + this.used;
}
var yearNow = new Date().getFullYear();
var car = {
    engine: 2000,
    model: 'Lacetti',
    name: 'Chevrolet',
    year: 2010,
    // used: 'used',
    get used() {
        return yearNow === this.year ? 'new' : 'used';
    },
    set used(v) {
        if (v === 'new' && this.year < yearNow) this.year = yearNow;
    },
    info
};
var anotherCar = {
    engine: 5000,
    model: 'FX50 AWD',
    name: 'Infinite',
    year: 2021,
    // used: 'new',
    get used() {
        return yearNow === this.year ? 'new' : 'used';
    },
    set used(v) {
        if (v === 'new' && this.year < yearNow) this.year = yearNow;
    },
    info
};
console.log(car.info());
car.used = 'new';
console.log(car.info());
car.used = 'used';
console.log(car.info());
console.log(anotherCar.info());
car.used = 'used';
console.log(anotherCar.info());

/* #5
*
* Для созданных ранее объектов определите метод info(), используя ключевое слово this.
* данный метод должен формировать и возвращать строку с полной информацией об автомобиле, например:
* Chevrolet Lacetti, 2000cc, year 2010, used
* Infinite FX50 AWD, 5000cc, year 2019, new
* пробелы, запятые, символы cc и текст – имеют значение и проверяются при тестировании кода
*
* #6
*
* Для созданных ранее объектов измените свойство used, используя аксессоры (геттер и сеттер).
* - используйте текущий год либо непосредственно в своем коде, либо с помощью глобальной переменной, например, yearNow
* - если год выпуска автомобиля отличается от текущего года, геттер used должен выводить текст 'used'
* - если год выпуска автомобиля совпадает с текущим годом, геттер used должен выводить текст 'new'
* - если сеттеру used присвоено значение 'new', при этом года выпуска автомобиля отличается от текущего года,
* - необходимо изменить год выпуска автомобиля, установив в качестве значения текущий год
* - если сеттеру used присвоено значение 'used', ничего делать не нужно
*/

// let yearNow = new Date().getFullYear(); // получить текущий год как число

// console.log(car.info()); // Chevrolet Lacetti, 2000cc, year 2010, used

// car.used = 'new';

// console.log(car.info()); // Chevrolet Lacetti, 2000cc, year 2019, new -- год изменен

// car.used = 'used';

// console.log(car.info()); // Chevrolet Lacetti, 2000cc, year 2019, new -- изменения не выполняются

// console.log(car2.info()); // Infinite FX50 AWD, 5000cc, year 2019, new

// car.used = 'used';

// console.log(car2.info()); // Infinite FX50 AWD, 5000cc, year 2019, new -- изменения не выполняются

/*
 * #7
 * Создайте функцию myMax(arr), которая в качестве параметра принимает
 * произвольный числовой массив и возвращает максимальное число из переданного ей массива.
 * В реализации функции должен быть применен метод Math.max() и apply().
 */

// let list = [12, 23, 100, 34, 56, 9, 233];

// console.log(myMax(list)); // 233
var list = [12, 23, 100, 34, 56, 9, 233];

function myMax(arr) {
    return Math.max.apply(null, arr)
}

console.log(myMax(list));
/*
 * #8
 *
 * Создайте функцию myMul(a, b), которая будет умножать числа а и b, возвращая результат.
 */

/*
 * создайте функции myDouble(n), которая принимает один параметр и  удваивает его.
 * Использовать умножение или другие математические операции внутри функции – запрещено, только bind() и myMul().
 * Функция возвращает результат вычисления.
 */

// console.log(myDouble(3)); // = myMul(2, 3) = 6

// console.log(myDouble(4)); // = myMul(2, 4) = 8

// console.log(myDouble(5)); // = myMul(2, 5) = 10

// аналогичным образом создайте функцию myTriple(n), которая утраивает принимающий параметр, возвращая результат.

// console.log(myTriple(3)); // = myMul(3, 3) = 9

// console.log(myTriple(4)); // = myMul(3, 4) = 12

// console.log(myTriple(5)); // = myMul(3, 5) = 15
function myMul(a, b) {
    return a * b;
}

let myDouble = myMul.bind(null, 2);
let myTriple = myMul.bind(null, 3);

// function myTriple(n) {
//     return 3*n;
// }
console.log(myDouble(3));
console.log(myDouble(4));
console.log(myDouble(5));
console.log(myTriple(3));
console.log(myTriple(4));
console.log(myTriple(5));
/*
 * #9
 *
 * Постройте функцию myUniq(arr), которая будет принимать произвольный массив
 * повторяющихся примитивных значений (например, имена пользователей или числа ).
 * Функция должна вернуть коллекцию уникальных значений.
 * В реализации разрешено использование set.
 * Любые условные операторы – запрещены и объекты.
 */

// let notUniqNums = [1, 1, 2, 3, 4, 5, 6, 7];

// let notUniqStrings = ['Bob', 'Kate', 'Jhon', 'Tom', 'Jhon', 'Kate', 'Tom', 'Bob', 'Jhon', 'Tom'];

// console.log(myUniq(notUniqNums));

// console.log(myUniq(notUniqStrings));

let notUniqNums = [1, 1, 2, 3, 4, 5, 6, 7];
let notUniqStrings = ['Bob', 'Kate', 'Jhon', 'Tom', 'Jhon', 'Kate', 'Tom', 'Bob', 'Jhon', 'Tom'];

function myUniq(arr) {
    let set = new Set();
    arr.forEach((v) => set.add(v));
    return set;
}

console.log(myUniq(notUniqNums));
console.log(myUniq(notUniqStrings));