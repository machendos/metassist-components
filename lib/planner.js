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
  this.data = task;
  this.status = null;
}


Planner.prototype.add = function(task) {
  if (task.type === 'single') {
    if (task.start instanceof Date && task.end instanceof Date) {
      const container = new TaskMetaContainer(task.start, task.end, task);
      const alreadyPlanned = this.tasksThisTime(task.start, task.end);
      if (!alreadyPlanned) {
        const index = this.calendar.findIndex((curTask, index) => {
          const nextTask = this.calendar[index + 1];
          return curTask.end <= task.start && nextTask.start >= task.end;
        }) + 1;
        this.calendar.splice(index, 0, container);
      } else {
        alreadyPlanned.forEach(alreadyPlannedtask => {
          if (alreadyPlannedtask.externalTask) {
            // dialogue
          } else if (alreadyPlanned.data.type === 'single') {
            if (task.externalTask) {
              // cancell already planned task
            } else {
              // dialogue
            }
          } else if (alreadyPlanned.data.type === 'regular') {
            if (!this.status) {
              // compress (on this day)
            } else {
              // resolution
            }
          } else {
            // if task is summary
          }
        });
      }
    } else console.log('Must be a data');
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
  return result[0] ? result : false;
};
