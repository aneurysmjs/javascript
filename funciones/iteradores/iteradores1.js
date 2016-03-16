'use strict';
/*
ES5 collections
   - Arrays
      double as stacks and queues
   - Objects (as dictionaries)
   - Strings (kinda collections)
      maybe a collection of characters but people don't really use it that way
   - Array-like(pseudo-arrays)
      arguments, typed arrays, node lists

ES5 methods
   - Arrays
      forEach, map, filter, sort, reverse, reduce, every, some, indexOf ...
   - Array-like(pseudo-arrays)
      Array.prototype.slice.call (just to transform it into an array effectively so then we can apply all of the Array methods,
                                  that kinda makes it annoying that we have something that we can't use they way we want to use it)
   - Objects
      // there isn't enough methods so that's why people rely on third-parties libraries
         lodash, underscore (very popular cuz they provide significant methods on top of Objects)
      Objects.keys

 */

/*
a linked list a list of values where you have container objects that contains the actual value
and each one of them contains a reference to the next element in the list
 */
function LinkedList() {

}

LinkedList.prototype = {
   add: function (value) { // receives a value and basically adds it at the end of the existing linkedList
      var prev = this.tail;

      this.tail = {
         value: value
      };

      if (prev) {
        prev.next = this.tail;
      } else {
         this.head = this.tail;
      }
      // it returns `this` which means that we can chain calls after the other
      return this;
   },
   /*
      forEach is our custom method for iterating for over all the items in the LinkedList, so you see because we can't use the existing `forEach`
      we actually needed to implement ourselves and as a result if we want other methods like `filter`, `map` or whatever, again, we need to implement it
      ourselves, we can't use the ones that already exists on top of `Array`, the alternative of course would be to copy the linkedList into an array but
      that kind of defeats the whole purpose of having the additional distinct collection type.
    */
   forEach: function (callback) {
      for (var current = this.head; current; current = current.next) {
         callback(current.value);
      }
   }
};

var list = new LinkedList;

list.add(1).add(2).add(4);

// this forEach iterates all over the properties of the list but that's it, wen can't use map, filter, very limiting.
// that's whay people don't implement their own collections types
list.forEach(function (value) {
   console.log(value);
   return value;
});

/*
   The solution for this problem of not having methods for all the collection types is the form of 'iterator'
   and 'iterator' is a design pattern.

   The whole idea is to abstract the relationship between a container and the methods you apply on top of it.

   so an iterator really 'provides a way to access the elements of an aggregate object(collection) sequentially
   without exposing its underlying representation'

   that means you can use the same interfaces, the same 'iterator interface' to iterate over elements in whatever
   type of collection and therefore, if you implement your algorithm on top of that 'iterator interface', it really
   don't care how the collection is implemented internally

   'iterators decouple algorithms from collections'
 */

/*
   - simple way in which ES2015 actually defines iterators
   - they're simply methods that return an object

   collection.iteratorFactory = function () {
      // every time you call the 'iteratorFactory' method, you get a new iterator instance
      return { // the iterator is just an object and that object only needs to have is a `next` method
         next: function () {
            ...
         }
      };
   };
   'duck typing' in most other programming languages which have similar capabilities, in order to implement an iterator
   you usually need to implement a certain interface or extend or derive from a certain object, that's not the case in
   javascript, in javascript in order to be an iterator you simply need to look like an iterator which means it can be any
   object as long as you have a `next` method.

   - `next` returns and object having two properties
   {
      value, // any - the value of the current item
      done // Boolean - true is we're at the end of the collection, otherwise is false
   }

   - when 'done' is true, 'value' is ignored, is not that a the last item in the collection (done === true),
   actually for the last item 'done' will still equal false, is after the last element where actually 'done'
   becomes true and then that value is irrelevant as we go beyond the end of the collection.

   - as long as 'done' is false, you don't actually have to specify 'done' at all if it doesn't exists is
   assume to be false and once 'done' is true you don't need to specify the 'value' because is ignored

   Looping

   var iterator = collection.iteratorFactory();
   while (true) {
      var item = iterator.next();
      if (item.done) break;
      process(item.value); // do whatever you want
   }
*/

// using iterators on our linkedList

function LinkedList2() {

}

LinkedList2.prototype = {

   add: function (value) {
      let prev = this.tail;

      this.tail = {
         value
      };

      if (prev) {
         prev.next = this.tail;
      } else {
         this.head = this.tail;
      }
      return this;
   },
   iteratorFactory() {
      let current = this.head;
      return { // iteratorFactory returns an object that just have the `next` method
         next() {
            // 'current' is the reference to the current element in the collection that we on
            // if it doesn't reference anything cuz either the list is empty or we reached the end of the list
            if (!current) {
               return {
                 done: true
               };
            }
            // otherwise it returns the current value and progresses 'current' to reference the next item in the list
            let value = current.value;
            current = current.next();
            return {
              value
            };
         }
      };
   }
};