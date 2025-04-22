///////////////// ** словарь ** 
interface abs {
    [key: number]: number
}


///////////////// ** enum ** 

enum transport {
    Metro, 
    Tram, 
    Bus
} // остается в рантайме как обьект, под капотом: Metro: [0], Tram: [1]...

enum transport2 {
    Metro = 'metro', 
    Tram = 'tram',
    Bus = 'bus'
} // остается в рантайме как обьект, под капотом: Metro: ['metro'], Tram: [tram]...
//можно обращаться в ОБЕ стороны: и ключ по значению, и значение по ключу
const trampam = transport2['tram'] 
const tramparam = transport2.Tram

const enum transport3 {
    Metro = 'metro', 
    Tram = 'tram',
    Bus = 'bus'
}  // ВЫПИЛИВАЕТСЯ из рантайма! везде подменяется значениями. Нельзя обращаться в обе стороны  
const tramparam3 = transport3.Tram
const trampam3 = transport3['tram']  // ошибка, потому что выпиливается в рантайме 

//////////////////// ** кортежи ** 
const arr: (string | number )[] = ['asdf', 1234];
const arr2: (string | number )[] = [1234, 1234];
const arr3: (string | number )[] = [ 1234, 'asdf'];
const arr4: (string | number )[] = [];

const kortege: [string, number] = ['asdf', 12345] /// нельзя наоборот, четко обозначено что на каком месте массива. 
// можно именовать: 
const kortege2: [name: string, number] = ['asdf', 12345] /// нельзя наоборот, четко обозначено что на каком месте массива. 
// можно как функцию 


//////////////////// ** классы ** 

// создал класс - он сразу и тип. 
class User {
    name: string
    getName: () => string;
}

function sayName(u: User) {} // тип = ЭКЗЕМПЛЯР класса 

// если нужен именно класс - то есть конструктор, конечно - 
function sayName2(u: typeof User) {} // тип = КОНСТРУКТОР класса 


//////////////////// ** пересечение типов/интерфейсов/чего/угодно ** 
// не | а & 
// разница с наследованием интерфейсов - обработка конфликтов 

type A = {
    ob: {
        a: number
    }
}

interface B {
    ob: {
        b: string
    }
}

type C = A & B // {a: 42, b: 'abac}

interface D extends A { // нарушение контракта, В ОТЛИЧИЕ от предыдущего. не дает 
    ob: {
        b: string
    }
} 
interface D2 extends A {// наследовать можно только с обратной совместимсостью: если бы в D.ob был перенаписан и a: number
    ob: {
        a: number
        b: string
    } 
} 

type E = number & string  // never! пустое множество 

type A2 = {a: number}
type B2 = {a: string}
type C2 = A2 & B2 // все ок, но a стало never 
 
// при наследовании тс бьет по рукам при конфликтах
// при пересечении тс просто генерит неверы при конфликтах

type A3 = {
    foo(a: number): number
}

type B3 = {
    foo(a: string): string
}

type C3 = A3 & B3 // раньше ошибался, сейчас делает перегрузку 
 


//////////////////// ** never ** 
// пустое множество 
// хорошо чистить свойства обьектов 
// функция гарантированно НЕ ВОЗВРАЩАЕТ ничего // а void - возвращает что угодно, но трогать нельзя
