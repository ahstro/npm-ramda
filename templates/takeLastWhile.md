Returns a new list containing the last `n` elements of a given list, passing
each value to the supplied predicate function, and terminating when the
predicate function returns `false`. Excludes the element that caused the
predicate function to fail. The predicate function is passed one argument:
*(value)*.

@func
@memberOf R
@since v0.16.0
@category List
@sig (a -> Boolean) -> [a] -> [a]
@param {Function} fn The function called per iteration.
@param {Array} list The collection to iterate over.
@return {Array} A new array.
@see R.dropLastWhile, R.addIndex
@example

     var isNotOne = x => x !== 1;

     R.takeLastWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]
