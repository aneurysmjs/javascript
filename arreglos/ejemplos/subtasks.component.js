(function () {
   'use strict';

   let subtasksComponent = {
      controller: 'SubtasksController',
      templateUrl: 'arreglos/ejemplos/subtasks.html'
   };

   angular.module('subtasks').component('subtasks', subtasksComponent);

}());