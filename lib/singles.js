'use strict';

function Singles() {
  Array.call(this);
  this.dialog = null;
}

Singles.prototype.__proto__ =  Array.prototype;
Singles.prototype.constructor = Singles;

Singles.prototype.add = function(task) {
  console.log(this);
  this.sort((task1, task2) => task1.start - task2.start);
  for (let currTaskInd = 0; currTaskInd < this.length - 1; currTaskInd++) {
    if (this[currTaskInd].finish > this[currTaskInd + 1].start) {
      this.dialog(this[currTaskInd], [this[currTaskInd + 1]]);
      return;
    }
  }
  const alreadyTaken = new Array(this.filter(alreadyPlannedTask =>
    alreadyPlannedTask.start < task.finish &&
    alreadyPlannedTask.finish > task.start
  ));
  if (alreadyTaken[0]) {
    this.dialog(task, alreadyTaken);
  } else {
    this.push({ start: Infinity });
    this.unshift({ finish: -Infinity });
    const necessaryIndex = this.findIndex(alreadyPlannedTask =>
      alreadyPlannedTask.start >= task.finish
    );
    this.splice(necessaryIndex, 0, task);
    this.pop();
    this.shift();
  }
};

