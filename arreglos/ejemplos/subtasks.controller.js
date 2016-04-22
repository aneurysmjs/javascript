(function () {
   'use strict';

   angular.module('subtasks').controller('SubtasksController', SubtasksController);

   SubtasksController.$inject = ['SubtasksService'];

   function SubtasksController(SubtasksService) {
      let self = this;

      self.subtask = {};

      activate();

      function activate() {
         SubtasksService.getSubtasks().then(result => {
            self.subtasks = result;
         });

         SubtasksService.calcPercentage();
      }


      self.addSubtask     = addSubtask;
      self.calcPercentage = calcPercentage;

      function addSubtask() {
         SubtasksService.addSubtask(self.subtask);
      }

      function calcPercentage() {
         SubtasksService.calcPercentage();
      }

   }


}());