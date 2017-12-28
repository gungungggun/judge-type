# Judge Type
Check datatype.

## Install

``` bash
$ npm install judge-type --save
```

## Usage

``` javascript
jt = require('judge-type');
str = 'hello';
num = 100;
jt.isString(str); // true
jt.isString(num); // false

jt.isNumber(str); // false
jt.isNumber(num); // true
```
