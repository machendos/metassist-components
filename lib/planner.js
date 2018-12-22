'use strict';

function Planner() {
  this.calendar = [
    { end: -Infinity },
    { start: Infinity }
  ];
  this.regularTasks = {};
  this.priorityQueue = [];
}

function TaskMetaContainer(start, end, task) {
  this.start = start;
  this.end = end;
  this.task = task;
}


Planner.prototype.add = function(task) {
  if (task.type === 'single') {
    if (task.start instanceof Date && task.end instanceof Date) {
      const index = this.calendar.findIndex((el, index) => {
        const currTask = this.calendar[index];
        const nextTask = this.calendar[index + 1];
        return currTask.end < task.start && nextTask.start > task.start;
      }) + 1;
      while (this.calendar[index].start < task.end) {
        this.calendar.splice(index, 1);
      }
      const container = new TaskMetaContainer(task.start, task.end, task);
      this.calendar.splice(index, 0, container);
    } else console.log('Error');
  }
};

Planner.prototype.tasksThisTime = function(start, end) {
  const result = [];
  this.calendar.forEach(task => {
    if (
      task.start > start && task.start < end ||
      task.end > start && task.end < end
    ) result.push(task);
  });
  return result;
};
