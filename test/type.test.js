const chai = require('chai')
const expect = chai.expect

describe('type test', () => {

  beforeEach(() => {
    jt = require('./../dist/judge-type')
    a = {}
    b = 'abcde'
    c = 12345
    d = ['array']
    e = function () {}
    f = function* () {}
    g = null
    h = a.a
    i = true
    j = false
    k = NaN
    l = Symbol()
  })

  it('isUndefined', (done) => {
    expect(jt.isUndefined(a)).to.be.false
    expect(jt.isUndefined(b)).to.be.false
    expect(jt.isUndefined(c)).to.be.false
    expect(jt.isUndefined(d)).to.be.false
    expect(jt.isUndefined(e)).to.be.false
    expect(jt.isUndefined(f)).to.be.false
    expect(jt.isUndefined(g)).to.be.false
    expect(jt.isUndefined(h)).to.be.true
    expect(jt.isUndefined(i)).to.be.false
    expect(jt.isUndefined(j)).to.be.false
    expect(jt.isUndefined(k)).to.be.false
    expect(jt.isUndefined(l)).to.be.false
    done()
  })

  it('isNull', (done) => {
    expect(jt.isNull(a)).to.be.false
    expect(jt.isNull(b)).to.be.false
    expect(jt.isNull(c)).to.be.false
    expect(jt.isNull(d)).to.be.false
    expect(jt.isNull(e)).to.be.false
    expect(jt.isNull(f)).to.be.false
    expect(jt.isNull(g)).to.be.true
    expect(jt.isNull(h)).to.be.false
    expect(jt.isNull(i)).to.be.false
    expect(jt.isNull(j)).to.be.false
    expect(jt.isNull(k)).to.be.false
    expect(jt.isNull(l)).to.be.false
    done()
  })

  it('isBoolean', (done) => {
    expect(jt.isBoolean(a)).to.be.false
    expect(jt.isBoolean(b)).to.be.false
    expect(jt.isBoolean(c)).to.be.false
    expect(jt.isBoolean(d)).to.be.false
    expect(jt.isBoolean(e)).to.be.false
    expect(jt.isBoolean(f)).to.be.false
    expect(jt.isBoolean(g)).to.be.false
    expect(jt.isBoolean(h)).to.be.false
    expect(jt.isBoolean(i)).to.be.true
    expect(jt.isBoolean(j)).to.be.true
    expect(jt.isBoolean(k)).to.be.false
    expect(jt.isBoolean(l)).to.be.false
    done()
  })

  it('isObject', (done) => {
    expect(jt.isObject(a)).to.be.true
    expect(jt.isObject(b)).to.be.false
    expect(jt.isObject(c)).to.be.false
    expect(jt.isObject(d)).to.be.false
    expect(jt.isObject(e)).to.be.false
    expect(jt.isObject(f)).to.be.false
    expect(jt.isObject(g)).to.be.false
    expect(jt.isObject(h)).to.be.false
    expect(jt.isObject(i)).to.be.false
    expect(jt.isObject(j)).to.be.false
    expect(jt.isObject(k)).to.be.false
    expect(jt.isObject(l)).to.be.false
    done()
  })

  it('isNumber', (done) => {
    expect(jt.isNumber(a)).to.be.false
    expect(jt.isNumber(b)).to.be.false
    expect(jt.isNumber(c)).to.be.true
    expect(jt.isNumber(d)).to.be.false
    expect(jt.isNumber(e)).to.be.false
    expect(jt.isNumber(f)).to.be.false
    expect(jt.isNumber(g)).to.be.false
    expect(jt.isNumber(h)).to.be.false
    expect(jt.isNumber(i)).to.be.false
    expect(jt.isNumber(j)).to.be.false
    expect(jt.isNumber(k)).to.be.false
    expect(jt.isNumber(l)).to.be.false
    done()
  })

  it('isNone', (done) => {
    expect(jt.isNone(a)).to.be.false
    expect(jt.isNone(b)).to.be.false
    expect(jt.isNone(c)).to.be.false
    expect(jt.isNone(d)).to.be.false
    expect(jt.isNone(e)).to.be.false
    expect(jt.isNone(f)).to.be.false
    expect(jt.isNone(g)).to.be.false
    expect(jt.isNone(h)).to.be.false
    expect(jt.isNone(i)).to.be.false
    expect(jt.isNone(j)).to.be.false
    expect(jt.isNone(k)).to.be.true
    expect(jt.isNone(l)).to.be.false
    done()
  })

  it('isString', (done) => {
    expect(jt.isString(a)).to.be.false
    expect(jt.isString(b)).to.be.true
    expect(jt.isString(c)).to.be.false
    expect(jt.isString(d)).to.be.false
    expect(jt.isString(e)).to.be.false
    expect(jt.isString(f)).to.be.false
    expect(jt.isString(g)).to.be.false
    expect(jt.isString(h)).to.be.false
    expect(jt.isString(i)).to.be.false
    expect(jt.isString(j)).to.be.false
    expect(jt.isString(k)).to.be.false
    expect(jt.isString(l)).to.be.false
    done()
  })

  it('isFunction', (done) => {
    expect(jt.isFunction(a)).to.be.false
    expect(jt.isFunction(b)).to.be.false
    expect(jt.isFunction(c)).to.be.false
    expect(jt.isFunction(d)).to.be.false
    expect(jt.isFunction(e)).to.be.true
    expect(jt.isFunction(f)).to.be.false
    expect(jt.isFunction(g)).to.be.false
    expect(jt.isFunction(h)).to.be.false
    expect(jt.isFunction(i)).to.be.false
    expect(jt.isFunction(j)).to.be.false
    expect(jt.isFunction(k)).to.be.false
    expect(jt.isFunction(l)).to.be.false
    done()
  })

  it('isGeneratorfunctioin', (done) => {
    expect(jt.isGeneratorfunction(a)).to.be.false
    expect(jt.isGeneratorfunction(b)).to.be.false
    expect(jt.isGeneratorfunction(c)).to.be.false
    expect(jt.isGeneratorfunction(d)).to.be.false
    expect(jt.isGeneratorfunction(e)).to.be.false
    expect(jt.isGeneratorfunction(f)).to.be.true
    expect(jt.isGeneratorfunction(g)).to.be.false
    expect(jt.isGeneratorfunction(h)).to.be.false
    expect(jt.isGeneratorfunction(i)).to.be.false
    expect(jt.isGeneratorfunction(j)).to.be.false
    expect(jt.isGeneratorfunction(k)).to.be.false
    expect(jt.isGeneratorfunction(l)).to.be.false
    done()
  })

  it('isSymbol', (done) => {
    expect(jt.isSymbol(a)).to.be.false
    expect(jt.isSymbol(b)).to.be.false
    expect(jt.isSymbol(c)).to.be.false
    expect(jt.isSymbol(d)).to.be.false
    expect(jt.isSymbol(e)).to.be.false
    expect(jt.isSymbol(f)).to.be.false
    expect(jt.isSymbol(g)).to.be.false
    expect(jt.isSymbol(h)).to.be.false
    expect(jt.isSymbol(i)).to.be.false
    expect(jt.isSymbol(j)).to.be.false
    expect(jt.isSymbol(k)).to.be.false
    expect(jt.isSymbol(l)).to.be.true
    done()
  })
})
