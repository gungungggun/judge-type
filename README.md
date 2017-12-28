# Judge Type

[![Build Status](https://travis-ci.org/gungungggun/judge-type.svg?branch=master)](https://travis-ci.org/gungungggun/judge-type)

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
