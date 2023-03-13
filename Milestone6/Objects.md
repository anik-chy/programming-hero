# JS Objects

## Object declare

```js
// create object using object literals
const player = {};
player.name = "Small Nirob";
player.specialty = "batsman";
player.bat = function () {
  console.log("swing your bat");
};

// class
class Person {
  name = "abul";
  address = "sodor ghat";
  constructor(age) {
    this.age = age;
  }
}

const person1 = new Person(56);
console.log(person1);
```

## Object methods

```js
const student = {
  name: "Kodom Ali",
  money: 5000,
  treatDey: function (amount, tips) {
    this.money = this.money - amount - tips;
    return this.money;
  },
};

const remaining = student.treatDey(900, 100);
console.log(remaining);
```

## Object properties handling

```js
const bottle = { color: "yellow", price: 50, isCleaned: true, capacity: 1 };
const keys = Object.keys(bottle); //keys
const values = Object.values(bottle); //values
const pair = Object.entries(bottle); // array of pair
delete bottle.isCleaned; //delete

Object.seal(bottle); // can't add/remove any property but can be modified

Object.freeze(bottle); //can't add,remove or modify
```

## Looping

\*\* for can't be used with objects

```js
// for in loop
for (const key in bottle) {
  const value = bottle[key];
  // console.log(key, value);
}

// advanced
const pair = Object.entries(bottle);
console.log(pair);
for (const [key, value] of Object.entries(bottle)) {
  console.log(key, value);
}
```

## Comparison

```js
function compareObject(first, second) {
  const firstKeys = Object.keys(first);
  const secondKeys = Object.keys(second);
  if (firstKeys.length === secondKeys.length) {
    for (const key of firstKeys) {
      if (first[key] !== second[key]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
```
