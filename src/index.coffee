class JudgeType
  judge: (type) ->
    t = Object.prototype.toString.call(type).slice(8, -1).toLowerCase()
    if t is 'number'
      if type isnt type
        t = 'none'
    return t

  isUndefined: (type) ->
    if this.judge(type) is 'undefined'
      return true
    return false

  isNull: (type) ->
    if this.judge(type) is 'null'
      return true
    return false

  isBoolean: (type) ->
    if this.judge(type) is 'boolean'
      return true
    return false

  isObject: (type) ->
    if this.judge(type) is 'object'
      return true
    return false

  isNumber: (type) ->
    if this.judge(type) is 'number'
      return true
    return false

  isNone: (type) ->
    if this.judge(type) is 'none'
      return true
    return false

  isString: (type) ->
    if this.judge(type) is 'string'
      return true
    return false

  isFunction: (type) ->
    if this.judge(type) is 'function'
      return true
    return false

  isGeneratorfunction: (type) ->
    if this.judge(type) is 'generatorfunction'
      return true
    return false

  isSymbol: (type) ->
    if this.judge(type) is 'symbol'
      return true
    return false

jt = new JudgeType
module.exports = jt
module.exports.default = jt
