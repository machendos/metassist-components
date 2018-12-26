'use strict';

function Singles() {
  Array.call(this);
  this.dialog = null;
}

Singles.prototype.__proto__ =  Array.prototype;
Singles.prototype.constructor = Singles;

