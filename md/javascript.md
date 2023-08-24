## 类型检测方法：
1. typeof
2. instanceof
3. Object.prototype.toString
4. constructor

typeof 操作符返回一个字符串
typeof undefined // undefined
typeof 100 // number
typeof true // boolean
typeof 'abc' // string
typeof null // object
typeof function () {} // function
typeof [1,2] // object
typeof new Object() // object
typeof 操作符适合对基本类型及function的检测和使用

instanceof 运算符用于检测一个对象在其原型链中是否存在一个构造函数的prototype属性
```
function Person() {}
function Student() {}
Student.prototype = new Person()
Student.prototype.constructor = Student

const ben = new Student()
ben instanceof Student // true

const one = new Person()
one instanceof Person // true
one instanceof Student // false

ben instanceof Person // true
```
任何一个构造函数都有一个prototype对象属性，这个对象属性将用作new实例化对象的原型对象
instanceof适合用于判断对象是否属于array、date和regexp等内置对象

Object.prototype.toString
可以通过toString()来获取每个对象的类型
为了每个对象都能通过Object.prototype.toString来检测，需要以Function.prototype.call
或者Function.prototype.apply的形式来调用，传递要检查的对象作为蒂耶戈参数
Object.prototype.toString.call(undefined) // "[object Undefined]"
Object.prototype.toString.call(null) // "[object Null]"
Object.prototype.toString.call(true) // "[object Boolean]"
Obejct.prototype.toString.call('') // "[object String]"
Obejct.prototype.toString.call(123) // "[object Number]"
Obejct.prototype.toString.call([]) // "[object Array]"
Obejct.prototype.toString.call({}) // "[object Object]"
使用Object.prototype.toString方法能精确地判断出值的数据类型

constructor
任何对象都有constructor属性，继承自原型对象，constructor会指向构造这个对象的构造器或者构造函数

## 运算符
### in
in运算符用于判断属性是否存在于对象中
key in obj

### instanceof
instanceof运算符用于测试构造函数的prototype属性是否出现在对象的原型链中的任何位置
target instanceof constructor
instanceof 可以检测某个对象是否是另一个对象的实例
```
const Person = function() {}
const student = new Person()

student instanceof Person // true
```

instanceof可以检测父类型
```
function Person(){}
function Student() {}

const p = new Person()

// 继承原型
Student.prototype = p

const s = new Student()

s instanceof Student // true
s instanceof Person // true
```
模拟实现
```
function _instanceof(left, right) {
  if (left === null || (typeof left !== 'object' && typeof left !== 'function')) return false;

  // 递归原型链
  while (true) {
    // Object.prototype.__Proto__ === null
    if (left === null) return false;

    // 当 left 严格等于 prototype 时，返回 true
    if (left === right.prototype) return true;
    left = left.__proto__;
  }
}
```

### 算术运算符
+  加法
-  减法
*  乘法
/  除法
%  求余
++ 自增，分为前自增和后自增
-- 自减，分为前自减和后自减
