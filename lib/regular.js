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
      if (!this.exact[weekFoundation]) {
        this.exact[weekFoundation] = {};
        const intFoundation = parseInt(weekFoundation);
        for (let weekNumber = 1; weekNumber <= intFoundation; weekNumber++) {
          this.exact[weekFoundation][weekNumber] = weekArray();
        }
      }
      const weeksByCurrFoundation = this.exact[weekFoundation];
      currRecord.weeks.forEach(weekNumber => {
        const dayPlanDB = weeksByCurrFoundation[weekNumber][weekDay];
        const tasksThisTime = [];
        dayPlanDB.forEach(currRecordDB => {
          if (
            currRecordDB.start > start && currRecordDB.start < end ||
          currRecordDB.end > start && currRecordDB.end < end
          ) tasksThisTime.push(task);
        });
        if (tasksThisTime[0]) {
          // dialogue
        } else {
          const index = dayPlanDB.findIndex((curTask, index) => {
            const nextTask = dayPlanDB[index + 1];
            return curTask.end <= start && nextTask.start >= end;
          }) + 1;
          dayPlanDB.splice(index, 0, currRecord);
        }
      });
    });
  });
};

const task = {
  weekPlan: [
    [
      {
        start: new Time(19, 0),
        end: new Time(21, 11),
        weekFoundation: '2',
        weeks: ['1'],
      },
      {
        start: new Time(11, 14),
        end: new Time(17, 23),
        weekFoundation: '2',
        weeks: ['1'],
      },
      {
        start: new Time(9, 11),
        end: new Time(11, 10),
        weekFoundation: '2',
        weeks: ['2'],
      },
      {
        start: new Time(17, 23),
        end: new Time(19, 0),
        weekFoundation: '2',
        weeks: ['2'],
      }
    ],
    [],
    [
      {
        start: new Time(19, 0),
        end: new Time(21, 11),
        weekFoundation: '2',
        weeks: ['1'],
      },
    ]
  ]
};

const collector = new RegularCollector();
collector.add(task);
console.dir(collector, { depth: null, showHidden: true });
