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
  this.exact = new Map();
}

module.exports = RegularCollector;
