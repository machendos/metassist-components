'use strict';

function Planner() {
  this.kalendar = [
    { end: -Infinity },
    { start: Infinity }
  ];
  this.regularTasks = {};
  this.priorityQueue = [];
}

function TaskMetaContainer(start, finish, task) {
  this.start = start;
  this.finish = finish;
  this.task = task;
}


Planner.prototype.add = function(task) {
  if (task.type === 'single') {
    if (task.start instanceof Date && task.end instanceof Date) {
      const index = this.kalendar.findIndex((el, index) => {
        const currTask = this.kalendar[index];
        const nextTask = this.kalendar[index + 1];
        return currTask.end < task.start && nextTask.start > task.start;
      }) + 1;
      while (this.kalendar[index].start < task.end) {
        this.kalendar.splice(index, 1);
      }
      const container = new TaskMetaContainer(task.start, task.end, task);
      this.kalendar.splice(index, 0, container);
    } else console.log('Error');
  }
};
