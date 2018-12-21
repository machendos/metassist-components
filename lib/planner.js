'use strict';

function Planner() {
  this.kalendar = [];
  this.regularTasks = {};
  this.priorityQueue = [];
}

function TaskMetaContainer(start, finish, task) {
  this.start = start;
  this.finish = finish;
  this.task = task;
}

const getPriority = task => {
  const priorityCriterion = [
    
  ];
  const priority = priorityCriterion.findIndex(criterion => criterion);
  if (priority === -1) console.log('Error'); //client error;
  return priority;
}

Planner.prototype.add = function(task) {
  if (task.type === 'single') {
    if (task.start instanceof Date && task.end instanceof Date) {
      const index = this.kalendar.findIndex((el, index) => {
        const currTask = this.kalendar[index];
        const nextTask = this.kalendar[index + 1];
        return currTask.end < task.start && nextTask.start > task.start;
      }) + 1;
      while(this.kalendar[index].start < task.kalendar.end) {
        this.kalendar.splice(index, 1);
      }
      const container = new TaskMetaContainer(task.start, task.end, task);
      this.kalendar.splice(index, container);
    } else console.log('Error');
  }
};
