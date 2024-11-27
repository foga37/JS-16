console.log('Приведіть 10 самостійних прикладів з копіюванням масивів/обєктів (5 масивів (2 багаторівневе), 5 обєктів (2 багаторівневе))');
console.log('однорівневі масиви');
// однорівневі (масив)
let a = [1, 4, 'hi', true];
let a1 = [...a];
console.log('spread',a1);
let b = [2, 3, 'hello', false];
let b1 = b.slice();
console.log('slice', b1);
let c = [51, 90, 0, 'work']
let c1 = c.map(i => i);
console.log('map', c1);
// багаторівневі масиви
console.log('багаторівневі масиви');
let d = [1, 4, [2, 3, [7, 8]]];
console.log('через рекурсію', d);
// через рекурсію
function recurcion(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            recurcion(arr[i])
        } else {
            console.log(arr[i]);
            
        }
    }
}
recurcion(d)
// через JSON
console.log('через JSON');
let d1 = JSON.parse(JSON.stringify(d))
d1 [0] = 20;
console.log(d1);

// однорівневі (обьєкти)
console.log('однорівневі обьєкти');
let ob = {a: 1, b: 2};
let ob1 = Object.assign({}, ob);
ob1.a = 100;
console.log(ob);  
console.log('assign', ob1); 

let ob2 = {x: 5, y: 9};
let ob3 = {...ob2};
ob3.x = 22;
console.log(ob2);
console.log('spread', ob3); 

let ob4 = {a: 3, b: 5};
let ob5 = {...ob4};
ob5.a = 20;
console.log(ob4, ob5);

// багаторівневі обьєкти
console.log('багаторівневі обьєкти');
console.log('JSON');
let obj = {a: 3, b: {c: 1, d: 4}};
console.log(obj);
let obj1 = JSON.parse(JSON.stringify(obj));
obj1.b.c = 5;
console.log('було', obj.b.c);  
console.log('стало', obj1.b.c);  

console.log('через рекурсію');
let obj2 = {a: 1, b: {c: 2, d: 3}};
console.log(obj2);
function recurcion1(obj) {
  let copy = {};
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      copy[key] = recurcion1(obj[key]);
    } else {
      copy[key] = obj[key];
    }
  }
  return copy;
}
let obj3 = recurcion1(obj2);
obj3.b.c = 10;
console.log('було', obj2.b.c);  
console.log('стало', obj3.b.c);  
console.log('Повторіть 14 та 15 домашні завдання (ті які стосуються функціонального програмування), та використовуйте Rest/Spread оператори. Деструктиризацію');
function clearHouse(isClean, cb) {
  if (isClean) {
      cb({ money: 500 });
  } else {
      cb({ message: 'Не прибрано' });
  }
}

function shop({ money }, cb) {
  const priceJeans = 50;
  if (money >= priceJeans) {
      const rest = money - priceJeans;
      cb({ rest });
  } else {
      cb({ message: 'Не достатньо грошей' });
  }
}

function mac({ money }, cb) {
  const priceOfBurger = 100;
  if (money >= priceOfBurger) {
      const rest = money - priceOfBurger;
      cb({ rest });
  } else {
      cb({ message: 'Надо більше грошей' });
  }
}

clearHouse(true, ({ money, message }) => {
  if (money) {
      console.log('Я отривам гроші');
      shop({ money }, ({ rest, message }) => {
          if (rest) {
              console.log('Я купив джинси, і маю ще решту', rest);
              mac({ money: rest }, ({ rest, message }) => {
                  if (rest) {
                      console.log('Я поїв, та маю решту', rest);
                  } else {
                      console.log(message || 'не маю грошей');
                  }
              });
          } else {
              console.log(message || 'Не хватає на джинси');
          }
      });
  } else {
      console.log(message || 'Я не отримав гроші');
  }
});
