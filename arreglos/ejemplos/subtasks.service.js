(function () {
   'use strict';

   angular.module('subtasks').service('SubtasksService', SubtasksService);

   SubtasksService.$inject = ['$q'];

   function SubtasksService($q) {

      let subtasks = [
         {percentage: 0},
         {percentage: 0},
         {percentage: 10},
         {percentage: 0},
      ];

      this.getSubtasks    = getSubtasks;
      this.addSubtask     = addSubtask;
      this.calcPercentage = calcPercentage;

      function getSubtasks() {
         return $q(function (resolve) {
            resolve(subtasks);
         });
      }

      function addSubtask(subtask) {
         subtasks.push(subtask);
      }

      function calcPercentage() {
         let totalPercentage = 100,
            percentage = 0,
            nonZeros = [],
            zeros = [],
            leftOver = 0,
            result = 0;

         [].forEach.call(subtasks, subtask => {
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

   }

}());