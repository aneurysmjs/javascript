(function () {
   'use strict';

   let subtasks = [
      {percentage: 0},
      {percentage: 0},
      {percentage: 10},
      {percentage: 0},
   ];

   function calc(arr) {
      let totalPercentage = 100,
          percentage = 0,
          nonZeros = [],
          zeros = [],
          leftOver = 0,
          result = 0;

      [].forEach.call(arr, subtask => {
         if (subtask.percentage !== 0) {
            nonZeros.push(subtask);
            percentage += subtask.percentage;
         } else {
            zeros.push(subtask);
         }
      });

      result = totalPercentage - percentage;

      leftOver = result / zeros.length;

      console.log('--- leftOver ---');
      console.log(leftOver);

      [].forEach.call(zeros, zero => zero.percentage = leftOver);

      console.log('--- result ---');
      console.log(result);


      let final = nonZeros.concat(zeros);

      console.log('--- final ---');
      console.log(final);
   }

   calc(subtasks);

}());