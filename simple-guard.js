export function guard(condition, exception) {

  var isFunction = typeof condition === 'function';
  var isBoolean = typeof condition === 'boolean';

  if (isFunction || isBoolean) {

    var passed = isFunction ? condition() : condition;
    if (!passed) {

      if (exception) {
        throw exception;
      } else {
        throw 'Guard: failed by the false condition.';
      }

    }

  } else {
    throw new Error('gurad requires a callback or boolean as the first argument');
  }
  
}
