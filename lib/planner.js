'use strict';

function Planner() {
  this.kalendar = {};
  this.regularTasks = {};
  this.priorityQueue = [];
}



const getPriority = task => {
  const priorityCriterion = [
    
  ];
  const priority = priorityCriterion.findIndex(criterion => criterion);
  if (priority === -1) console.log('Error'); //client error;
  return priority;
}

Planner.prototype.add = function(task) {
  
};


