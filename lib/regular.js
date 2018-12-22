'use strict';

function Time(hour, minutes) {
  this.hour = hour;
  this.minutes = minutes;
}

Time.prototype.valueOf = function() {
  return this.hour * 60 + this.minutes;
};

const weekArray = () => new Array(7).fill(null).map(() => [
  { end: new Time(0, 0) },
  { start: new Time(23, 59) }
]); // [[{e00}, {s2359}], [A], [A], [A], [A], [A], [A]]

function RegularCollector() {
  this.exact = { 1: { 1: weekArray() } };
}

module.exports = RegularCollector;

RegularCollector.prototype.add = function(task) {
  task.weekPlan.forEach((dayPlan, weekDay) => {
    dayPlan.forEach(currRecord => {

      const start = currRecord.start;
      const end = currRecord.end;
      const weekFoundation = currRecord.weekFoundation;
      if (!this.exact[weekDay]) {
        this.exact[weekDay] = {};
        const intFoundation = parseInt(weekFoundation);
        for (let weekNumber = 1; weekNumber <= intFoundation; weekNumber++) {
          this.exact[weekFoundation][weekNumber] = weekArray();
        }
      }
      const weeksByCurrFoundation = this.exact[weekFoundation];
      currRecord.weeks.forEach(weekNumber => {
        const dayPlanDB = weeksByCurrFoundation[weekNumber][weekDay];
        const tasksThisTime = [];
        dayPlanDB.map(currRecordDB => {
          if (
            currRecord.start > start && currRecord.start < end ||
          currRecord.end > start && currRecord.end < end
          ) tasksThisTime.push(task);
        });
        if (tasksThisTime[0]) {
          // dialogue
        } else {
          const index = dayPlanDB.findIndex((curTask, index) => {
            const nextTask = dayPlanDB[index + 1];
            return curTask.end <= start && nextTask.start >= end;
          }) + 1;
          dayPlanDB.slice(index, 0, currRecord);
        }
      });
    });
  });
};
